"use client";

import { useEffect, useState } from "react";

const menuItems = [
  { label: "Start", href: "#start" },
  { label: "Line-up 2027", href: "#lineup" },
  { label: "Rückblick 2026", href: "#rueckblick" },
  { label: "Sponsoren", href: "#sponsoren" },
];

export default function MainMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Menü öffnen"
        aria-expanded={open}
        aria-controls="main-menu"
        className="fixed right-5 top-5 z-[100] flex h-12 w-12 items-center justify-center border border-white/30 bg-black/55 text-white backdrop-blur-md transition hover:bg-black/75 md:right-8 md:top-8 md:h-14 md:w-14"
      >
        <span className="flex w-6 flex-col gap-[5px]">
          <span className="h-[2px] w-full bg-white" />
          <span className="h-[2px] w-full bg-white" />
          <span className="h-[2px] w-full bg-white" />
        </span>
      </button>

      <div
        id="main-menu"
        className={`fixed inset-0 z-[110] bg-black/95 backdrop-blur-md transition-all duration-300 ${
          open
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Menü schließen"
          className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center border border-white/30 text-white transition hover:bg-white/10 md:right-8 md:top-8 md:h-14 md:w-14"
        >
          <span className="relative block h-7 w-7">
            <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rotate-45 bg-white" />
            <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 -rotate-45 bg-white" />
          </span>
        </button>

        <nav
          aria-label="Hauptnavigation"
          className="flex min-h-full items-center justify-center px-6"
        >
          <ul className="text-center">
            {menuItems.map((item) => (
              <li key={item.href} className="my-5 md:my-7">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-3xl font-black uppercase tracking-[0.08em] text-white transition hover:text-white/60 sm:text-4xl md:text-6xl"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
