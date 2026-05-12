"use client";

import LunaraLogo from "./LunaraLogo";

export default function Footer() {
  return (
    <footer
      className="py-12 px-6"
      style={{
        backgroundColor: "#0B132B",
        borderTop: "1px solid rgba(197,164,109,0.1)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo + tagline */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <LunaraLogo variant="light" size={28} />
            <span
              className="text-sm tracking-widest"
              style={{ color: "#F4F3EE", fontFamily: "var(--font-poppins)", letterSpacing: "0.15em" }}
            >
              LUNARA
            </span>
          </div>
          <p
            className="text-xs"
            style={{ color: "rgba(244,243,238,0.35)", fontFamily: "var(--font-poppins)", fontStyle: "italic" }}
          >
            Tu cielo, tu historia.
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-8">
          {[
            { label: "Instagram", href: "https://www.instagram.com/lunara_maps" },
            { label: "WhatsApp", href: "#" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-sm transition-colors"
              style={{
                color: "rgba(244,243,238,0.4)",
                fontFamily: "var(--font-poppins)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "#C5A46D";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "rgba(244,243,238,0.4)";
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Legal */}
        <p
          className="text-xs"
          style={{ color: "rgba(244,243,238,0.25)", fontFamily: "var(--font-poppins)" }}
        >
          © {new Date().getFullYear()} Lunara. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
