"use client";

import { useEffect, useState } from "react";

const LINES = [
  { html: '<span class="prompt">$</span>nuj deploy --client=sme-retail', pause: 380 },
  { html: '✓ Provisioning SEO-ready site <span class="dim">4m12s</span>', pause: 320 },
  { html: '✓ Building content pipeline <span class="dim">done</span>', pause: 320 },
  { html: '✓ Wiring CRM + invoicing agents <span class="dim">done</span>', pause: 320 },
  { html: '✓ Connecting lead-gen automation <span class="dim">done</span>', pause: 420 },
  {
    html: '<span class="result">Live in days. Zero outsourcing.<span class="cursor">▌</span></span>',
    pause: 0,
  },
];

export default function DeployConsole() {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let index = 0;
    let timer: ReturnType<typeof setTimeout>;

    const revealNext = () => {
      index += 1;
      setShown(index);
      if (index < LINES.length) {
        timer = setTimeout(revealNext, LINES[index - 1].pause + 260);
      }
    };

    if (reduceMotion) {
      timer = setTimeout(() => setShown(LINES.length), 0);
    } else {
      timer = setTimeout(revealNext, LINES[0].pause + 260);
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="console-body mono">
      {LINES.slice(0, shown).map((line, i) => (
        <p key={i} className="line show" dangerouslySetInnerHTML={{ __html: line.html }} />
      ))}
    </div>
  );
}
