"use client";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState<string>("home");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    NAV_ITEMS.forEach((it) => {
      const el = document.getElementById(it.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 nav-shell px-3 py-2 shadow hidden md:block" aria-label="Primary">
        <ul className="flex gap-3 items-center">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-item ${isActive ? "nav-active" : "hover:scale-[1.03]"}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 nav-shell px-4 py-3 shadow-lg" aria-label="Primary">
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">Portfolio</span>
          
          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="mobile-menu-btn p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <div className="hamburger">
              <span className={`hamburger-line ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`hamburger-line ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`hamburger-line ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Items */}
        <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu-open' : 'mobile-menu-closed'}`}>
          <ul className="flex flex-col gap-2 pt-4">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={closeMenu}
                    className={`nav-item block text-center ${isActive ? "nav-active" : "hover:scale-[1.02]"}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}
