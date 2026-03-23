"use client";

interface ContactDetail {
  icon: string;
  label: string;
  value: string;
  href: string;
  color: string;
}

export default function ContactCard({ detail }: { detail: ContactDetail }) {
  return (
    <a
      href={detail.href}
      target={detail.href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="flex items-start gap-3 rounded-[14px] p-4 transition-all duration-200 group"
      style={{
        background: "#0F1419",
        border: "1px solid rgba(255,255,255,0.07)",
        textDecoration: "none",
      }}
      onMouseEnter={(e) => {
        (
          e.currentTarget as HTMLAnchorElement
        ).style.borderColor = `${detail.color}40`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.borderColor =
          "rgba(255,255,255,0.07)";
      }}
    >
      <div
        className="w-10 h-10 rounded-[10px] flex items-center justify-center text-xl flex-shrink-0"
        style={{ background: `${detail.color}15` }}
      >
        {detail.icon}
      </div>
      <div>
        <p
          style={{
            fontSize: "10.5px",
            color: "rgba(255,255,255,0.3)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            fontFamily: "monospace",
            marginBottom: "3px",
          }}
        >
          {detail.label}
        </p>
        <p
          style={{
            fontSize: "13.5px",
            color: "white",
            fontWeight: 500,
          }}
        >
          {detail.value}
        </p>
      </div>
    </a>
  );
}
