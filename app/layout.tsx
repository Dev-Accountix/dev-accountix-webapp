import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevAccountix — Build Smarter. Balance Better.",
  description: "Full‑stack engineering + accounting expertise. Mobile, Web, DevOps, QA, and Accounting under one roof."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
