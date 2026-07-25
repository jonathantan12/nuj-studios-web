import Link from "next/link";
import type { NavMenuItem } from "./NavDropdown";

export default function NavMobileAccordion({
  label,
  items,
  viewAll,
  isOpen,
  onToggle,
  onSelect,
}: {
  label: string;
  items: NavMenuItem[];
  viewAll?: { href: string; label: string };
  isOpen: boolean;
  onToggle: () => void;
  onSelect: () => void;
}) {
  return (
    <div className="nav-mobile-group">
      <button
        type="button"
        className="nav-mobile-group-trigger"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        {label}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`nav-chevron${isOpen ? " is-open" : ""}`}
        >
          <path d="M6 9l6 6l6 -6" />
        </svg>
      </button>
      <div className={`nav-mobile-submenu${isOpen ? " is-open" : ""}`}>
        <div className="nav-mobile-submenu-content">
          {items.map((item) => (
            <Link key={item.href} href={item.href} onClick={onSelect}>
              {item.name}
            </Link>
          ))}
          {viewAll && (
            <Link href={viewAll.href} onClick={onSelect}>
              {viewAll.label}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
