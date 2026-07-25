"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/site-config";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 761px)");
    const onChange = () => setOpen(false);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link className="logo" href="/">
          <span className="logo-mark">{"{ }"}</span>Nuj Studios
        </Link>

        <nav className="nav-links">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="btn btn-dark nav-cta" href="mailto:hello@nujstudios.com">
            Book a call
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      <div className={`nav-mobile${open ? " is-open" : ""}`}>
        <div className="nav-mobile-content">
          <nav className="nav-mobile-links">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            className="btn btn-dark nav-mobile-cta"
            href="mailto:hello@nujstudios.com"
            onClick={() => setOpen(false)}
          >
            Book a call →
          </a>
        </div>
      </div>
    </header>
  );
}
