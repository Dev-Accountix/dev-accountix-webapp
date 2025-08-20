import Link from "next/link";
import { headers } from "next/headers";

type Post = { title: string; link: string; isoDate?: string };

export default async function Blogs({ username }: { username?: string }) {
  const u = username || process.env.MEDIUM_USERNAME || "medium";

  // Build absolute base URL from request headers (works in dev & prod)
  const hdrs = headers();
  const protocol = hdrs.get("x-forwarded-proto") ?? "http";
  const host =
    hdrs.get("x-forwarded-host") ?? hdrs.get("host") ?? "localhost:3000";
  const base = `${protocol}://${host}`;

  const res = await fetch(
    `${base}/api/medium?username=${encodeURIComponent(u)}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return (
      <div className="text-white/70">
        Unable to load Medium posts right now.
      </div>
    );
  }

  const posts: Post[] = await res.json();

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {posts.slice(0, 6).map((p, i) => (
        <Link
          key={i}
          href={p.link as any}
          target="_blank"
          className="group glass p-5 hover:bg-white/[0.08] transition"
        >
          <h3 className="font-semibold group-hover:text-white/90">{p.title}</h3>
          <p className="mt-2 text-sm text-white/60">
            {new Date(p.isoDate || Date.now()).toLocaleDateString()}
          </p>
          <div className="mt-4 text-brand-200 text-sm">Read on Medium →</div>
        </Link>
      ))}
    </div>
  );
}
