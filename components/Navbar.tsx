"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const sections = ["home", "projects", "testimonials", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom >= 80) {
          setActive(id);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/80 backdrop-blur rounded-full px-4 py-2 shadow">
      <ul className="flex gap-4 items-center">
        {[
          { id: "home", label: "Home" },
          { id: "projects", label: "Projects" },
          { id: "testimonials", label: "Testimonials" },
          { id: "contact", label: "Contact" },
        ].map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`px-3 py-1 rounded-full ${active === item.id ? "bg-foreground text-background" : "text-foreground/70 hover:text-foreground"}`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
