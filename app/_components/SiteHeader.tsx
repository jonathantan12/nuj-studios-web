"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { NAV_LINKS, RESOURCE_LINKS } from "@/lib/site-config";
import { SERVICES } from "@/lib/services";
import { CASE_STUDIES } from "@/lib/case-studies";
import NavDropdown from "./NavDropdown";
import NavMobileAccordion from "./NavMobileAccordion";

const SERVICE_ITEMS = SERVICES.map((service) => ({
  href: `/services/${service.slug}`,
  name: service.name,
  short: service.short,
}));

const CASE_STUDY_ITEMS = CASE_STUDIES.map((study) => ({
  href: `/case-studies/${study.slug}`,
  name: study.title,
  short: study.summary,
}));

const RESOURCE_ITEMS = RESOURCE_LINKS.map((link) => ({
  href: link.href,
  name: link.label,
  short: link.short,
}));

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const navLinksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open && !openMenu) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setOpenMenu(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, openMenu]);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 761px)");
    const onChange = () => {
      setOpen(false);
      setOpenMobileGroup(null);
    };
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!openMenu) return;
    const onClick = (e: MouseEvent) => {
      if (navLinksRef.current && !navLinksRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [openMenu]);

  const toggleMenu = (key: string) => setOpenMenu((cur) => (cur === key ? null : key));
  const toggleMobileGroup = (key: string) =>
    setOpenMobileGroup((cur) => (cur === key ? null : key));

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link className="logo" href="/">
          <span className="logo-mark">{"{ }"}</span>Nuj Studios
        </Link>

        <nav className="nav-links" ref={navLinksRef}>
          <NavDropdown
            label="Services"
            items={SERVICE_ITEMS}
            viewAll={{ href: "/services", label: "View all services →" }}
            isOpen={openMenu === "services"}
            onToggle={() => toggleMenu("services")}
            onSelect={() => setOpenMenu(null)}
          />
          <NavDropdown
            label="Case Studies"
            items={CASE_STUDY_ITEMS}
            viewAll={{ href: "/case-studies", label: "View all case studies →" }}
            isOpen={openMenu === "case-studies"}
            onToggle={() => toggleMenu("case-studies")}
            onSelect={() => setOpenMenu(null)}
          />
          <NavDropdown
            label="Resources"
            items={RESOURCE_ITEMS}
            viewAll={{ href: "/resources", label: "Browse all resources →" }}
            isOpen={openMenu === "resources"}
            onToggle={() => toggleMenu("resources")}
            onSelect={() => setOpenMenu(null)}
          />

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
            <NavMobileAccordion
              label="Services"
              items={SERVICE_ITEMS}
              viewAll={{ href: "/services", label: "View all services →" }}
              isOpen={openMobileGroup === "services"}
              onToggle={() => toggleMobileGroup("services")}
              onSelect={() => setOpen(false)}
            />
            <NavMobileAccordion
              label="Case Studies"
              items={CASE_STUDY_ITEMS}
              viewAll={{ href: "/case-studies", label: "View all case studies →" }}
              isOpen={openMobileGroup === "case-studies"}
              onToggle={() => toggleMobileGroup("case-studies")}
              onSelect={() => setOpen(false)}
            />
            <NavMobileAccordion
              label="Resources"
              items={RESOURCE_ITEMS}
              viewAll={{ href: "/resources", label: "Browse all resources →" }}
              isOpen={openMobileGroup === "resources"}
              onToggle={() => toggleMobileGroup("resources")}
              onSelect={() => setOpen(false)}
            />

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
