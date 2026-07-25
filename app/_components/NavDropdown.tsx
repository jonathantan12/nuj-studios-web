import Link from "next/link";

export type NavMenuItem = { href: string; name: string; short: string };

export default function NavDropdown({
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
    <div className="nav-dropdown">
      <button
        type="button"
        className="nav-dropdown-trigger"
        aria-expanded={isOpen}
        aria-haspopup="true"
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
          className="nav-chevron"
        >
          <path d="M6 9l6 6l6 -6" />
        </svg>
      </button>

      <div className={`nav-mega${isOpen ? " is-open" : ""}`}>
        <div className="nav-mega-grid">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="nav-mega-item" onClick={onSelect}>
              <span className="nav-mega-item-name">{item.name}</span>
              <span className="nav-mega-item-desc">{item.short}</span>
            </Link>
          ))}
        </div>
        {viewAll && (
          <Link href={viewAll.href} className="nav-mega-viewall" onClick={onSelect}>
            {viewAll.label}
          </Link>
        )}
      </div>
    </div>
  );
}
