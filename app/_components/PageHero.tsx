import type { ReactNode } from "react";

export default function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="page-hero-inner">
        <span className="eyebrow mono">
          <span className="dot"></span>
          {eyebrow}
        </span>
        <h1>{title}</h1>
        {intro && <p className="page-hero-intro">{intro}</p>}
        {children}
      </div>
    </section>
  );
}
