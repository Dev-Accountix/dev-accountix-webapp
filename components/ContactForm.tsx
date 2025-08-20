"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<null | "ok" | "err">(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setLoading(false);
    setStatus(res.ok ? "ok" : "err");
    if (res.ok) form.reset();
  }

  return (
    <form onSubmit={onSubmit} className="glass p-6 space-y-4">
      {/* honeypot field (hidden) */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        defaultValue=""
      />

      <div className="grid md:grid-cols-2 gap-4">
        <input
          name="name"
          placeholder="Your name"
          required
          className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-brand-400"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-brand-400"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <input
          name="phone"
          placeholder="Phone"
          className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-brand-400"
        />
      </div>

      <textarea
        name="message"
        placeholder="Tell us about your project..."
        rows={5}
        required
        className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-brand-400"
      />

      <button
        disabled={loading}
        className={`rounded-lg px-5 py-3 font-medium transition ${
          loading
            ? "bg-white/10 text-white/60 cursor-not-allowed"
            : "bg-brand-500 hover:bg-brand-400"
        }`}
      >
        {loading ? "Sending…" : "Send message"}
      </button>

      {status === "ok" && (
        <p className="text-emerald-300 text-sm">
          Thanks! We’ll get back to you soon.
        </p>
      )}
      {status === "err" && (
        <p className="text-rose-300 text-sm">
          Something went wrong. Please try again.
        </p>
      )}

      <p className="text-xs text-white/50">
        Or reach us at{" "}
        <a href="mailto:info@devaccountix.com" className="underline">
          info@devaccountix.com
        </a>{" "}
        · +91 7889178080
      </p>
    </form>
  );
}
