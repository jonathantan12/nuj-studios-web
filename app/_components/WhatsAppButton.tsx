import { WHATSAPP_URL } from "@/lib/site-config";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.02 2C6.5 2 2 6.5 2 12.02c0 1.82.48 3.53 1.32 5.01L2 22l5.09-1.31a9.98 9.98 0 0 0 4.93 1.3h.01c5.52 0 10.02-4.5 10.02-10.02C22.05 6.5 17.55 2 12.02 2Zm5.87 14.32c-.25.7-1.44 1.34-1.99 1.42-.51.08-1.14.11-1.84-.12-.42-.14-.97-.32-1.66-.62-2.92-1.26-4.83-4.2-4.98-4.4-.15-.2-1.19-1.58-1.19-3.02 0-1.44.75-2.14 1.02-2.43.27-.29.58-.36.78-.36.2 0 .39 0 .56.01.18.01.42-.07.65.5.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.33-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.3.76 1.26 1.64 2.04 1.13 1 2.08 1.32 2.38 1.47.3.15.47.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.24.66-.14.27.1 1.73.82 2.02.97.3.15.5.22.57.35.07.13.07.75-.18 1.45Z" />
    </svg>
  );
}

export default function WhatsAppButton({
  variant = "full",
  className = "",
}: {
  variant?: "full" | "icon" | "float";
  className?: string;
}) {
  if (variant === "icon" || variant === "float") {
    return (
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn-icon btn-whatsapp ${variant === "float" ? "btn-whatsapp-float" : ""} ${className}`.trim()}
        aria-label="Chat with us on WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    );
  }

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn-outline btn-whatsapp ${className}`.trim()}
    >
      <WhatsAppIcon />
      WhatsApp us
    </a>
  );
}
