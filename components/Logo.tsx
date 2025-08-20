import Image from "next/image";
import Link from "next/link";

export default function Logo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <Link href="/" className="inline-flex items-center gap-2">
      <Image src="/logo.svg" alt="DevAccountix logo" width={36} height={36} priority />
      <span className="font-semibold tracking-tight text-white text-lg">DevAccountix</span>
    </Link>
  );
}
