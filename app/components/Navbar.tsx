"use client";

import { useState, useEffect } from "react";
import LunaraLogo from "./LunaraLogo";

interface NavbarProps {
  configuratorUrl?: string;
}

export default function Navbar({ configuratorUrl = "#configurador" }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(244,243,238,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(197,164,109,0.2)" : "none",
        boxShadow: scrolled ? "0 2px 20px rgba(11,19,43,0.06)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2 group">
          <LunaraLogo
            variant={scrolled ? "dark" : "light"}
            size={36}
          />
          <span
            className="text-sm tracking-widest font-medium transition-colors"
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              color: scrolled ? "#0B132B" : "#F4F3EE",
              letterSpacing: "0.15em",
            }}
          >
            LUNARA
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {["Cómo funciona", "Galería", "Testimonios"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, "-").replace(/ó/g, "o")}`}
              className="text-sm transition-colors"
              style={{
                fontFamily: "var(--font-poppins), sans-serif",
                color: scrolled ? "#8C8C8C" : "rgba(244,243,238,0.75)",
                fontWeight: 400,
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = scrolled ? "#0B132B" : "#F4F3EE";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = scrolled
                  ? "#8C8C8C"
                  : "rgba(244,243,238,0.75)";
              }}
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href={configuratorUrl}
          className="text-sm px-5 py-2.5 rounded-full transition-all duration-200 font-medium"
          style={{
            fontFamily: "var(--font-poppins), sans-serif",
            backgroundColor: "#C5A46D",
            color: "#0B132B",
            letterSpacing: "0.02em",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.backgroundColor = "#b8935c";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.backgroundColor = "#C5A46D";
          }}
        >
          Crea tu cielo
        </a>
      </div>
    </header>
  );
}
