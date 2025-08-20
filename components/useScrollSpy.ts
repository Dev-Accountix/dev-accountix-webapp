"use client";
import { useEffect, useState } from "react";

export default function useScrollSpy(ids: string[], offset = 100) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const onScroll = () => {
      const scrollY = window.scrollY + offset;
      let current: string | null = null;

      for (const sec of sections) {
        if (sec.offsetTop <= scrollY) current = sec.id;
      }
      setActiveId(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids, offset]);

  return activeId;
}
