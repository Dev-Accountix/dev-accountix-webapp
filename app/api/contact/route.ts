// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

export const runtime = "nodejs"; // ← ensure Node runtime
export const dynamic = "force-dynamic"; // ← avoid static caching on some hosts

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(5),
  website: z.string().optional().default(""), // honeypot
});

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, phone, message, website } = schema.parse(data);

    // Honeypot (hidden field)
    if (website && website.trim() !== "") {
      return NextResponse.json({ ok: true });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const CONTACT_TO = process.env.CONTACT_TO;
    // For local testing you can use onboarding@resend.dev
    const CONTACT_FROM = process.env.CONTACT_FROM || "onboarding@resend.dev";

    if (!RESEND_API_KEY || !CONTACT_TO || !CONTACT_FROM) {
      console.error("[CONTACT] Missing envs", {
        hasResend: !!RESEND_API_KEY,
        hasTo: !!CONTACT_TO,
        hasFrom: !!CONTACT_FROM,
      });
      return NextResponse.json(
        { ok: false, error: "Missing server configuration" },
        { status: 400 }
      );
    }

    const resend = new Resend(RESEND_API_KEY);

    const subject = `New inquiry from ${name} — DevAccountix`;
    const html = `
      <div style="font-family:Inter,system-ui,Segoe UI,Roboto,Arial,sans-serif">
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "-")}</p>
        <p><strong>Message:</strong><br/>${escapeHtml(message).replace(
          /\n/g,
          "<br/>"
        )}</p>
        <hr/>
        <p style="color:#666;font-size:12px">Sent from devaccountix.com</p>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: CONTACT_FROM, // e.g. info@devaccountix.com (must be verified on Resend)
      to: CONTACT_TO, // where you receive it (your Gmail etc.)
      subject,
      html,
      replyTo: email, // reply directly to the sender
    });

    if (error) {
      console.error("[CONTACT] Resend error:", error);
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    // zod errors or JSON parse errors will land here
    console.error("[CONTACT] error:", err);
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
