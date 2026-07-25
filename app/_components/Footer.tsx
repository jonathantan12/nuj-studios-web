import Link from "next/link";
import { CONTACT_EMAIL, FOOTER_LINKS } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer>
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Link className="logo" href="/">
            <span className="logo-mark">{"{ }"}</span>Nuj Studios
          </Link>
          <p className="mono footer-note">Singapore · Boutique digital agency for SMEs</p>
        </div>

        <div className="footer-col">
          <span className="footer-col-title mono">Company</span>
          <ul>
            {FOOTER_LINKS.company.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <span className="footer-col-title mono">Services</span>
          <ul>
            {FOOTER_LINKS.services.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <span className="footer-col-title mono">Get in touch</span>
          <ul>
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <p className="mono footer-note">
          © {new Date().getFullYear()} Nuj Studios. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
