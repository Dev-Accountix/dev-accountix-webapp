"use client";
import { motion } from "framer-motion";
import Logo from "./Logo";
import useScrollSpy from "./useScrollSpy";

const links = [
  { href: "#home", id: "home", label: "Home" },
  { href: "#services", id: "services", label: "Services" },
  { href: "#tech", id: "tech", label: "Tech" },
  { href: "#blogs", id: "blogs", label: "Blogs" },
  { href: "#contact", id: "contact", label: "Contact" },
];

export default function NavBar() {
  const activeId = useScrollSpy(
    links.map((l) => l.id),
    140
  );

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl"
    >
      <div className="container-pro flex items-center justify-between py-3">
        <Logo />
        <nav className="hidden md:flex items-center gap-6 relative">
          {links.map((l) => {
            const isActive = activeId === l.id;
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleClick(e, l.id)}
                className={`text-sm transition ${
                  isActive ? "text-white" : "text-white/80 hover:text-white"
                }`}
              >
                <span className="relative inline-block">
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 -bottom-1 h-[2px] w-full bg-brand-400 rounded"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 40,
                      }}
                    />
                  )}
                </span>
              </a>
            );
          })}
        </nav>
        <a
          href="#contact"
          onClick={(e) => handleClick(e, "contact")}
          className="ml-4 rounded-full bg-brand-500 px-4 py-2 text-sm font-medium hover:bg-brand-400 transition"
        >
          Get a quote
        </a>
      </div>
    </motion.header>
  );
}
