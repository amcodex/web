"use client";

import Image from "next/image";

const maps = [
  { src: "/dummylanding1.png", alt: "Mapa estelar fondo azul marino", label: "Estilo Midnight" },
  { src: "/dummylanding2.png", alt: "Mapa estelar fondo blanco", label: "Estilo Classic" },
  { src: "/dummylanding3.png", alt: "Mapa estelar fondo azul oscuro", label: "Estilo Navy" },
  { src: "/dummylanding4.png", alt: "Mapa estelar fondo negro", label: "Estilo Noir" },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 px-6" style={{ backgroundColor: "#0B132B" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-widest uppercase mb-4"
            style={{ color: "#C5A46D", fontFamily: "var(--font-poppins)", letterSpacing: "0.2em" }}
          >
            Galería
          </p>
          <h2
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              color: "#F4F3EE",
              fontWeight: 500,
              lineHeight: 1.2,
            }}
          >
            Cada mapa cuenta una historia
            <br />
            <em style={{ color: "#C5A46D" }}>que solo vos conocés.</em>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {maps.map((map, i) => (
            <div
              key={i}
              className="flex flex-col gap-3"
            >
              <div
                className="rounded-xl overflow-hidden transition-all duration-300 cursor-pointer"
                style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.3)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "scale(1.03) translateY(-4px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(197,164,109,0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.3)";
                }}
              >
                <Image
                  src={map.src}
                  alt={map.alt}
                  width={300}
                  height={420}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
              <p
                className="text-center text-xs"
                style={{ color: "rgba(197,164,109,0.7)", fontFamily: "var(--font-poppins)", letterSpacing: "0.1em" }}
              >
                {map.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p
          className="text-center mt-10 text-sm"
          style={{ color: "rgba(244,243,238,0.4)", fontFamily: "var(--font-poppins)", fontStyle: "italic" }}
        >
          Cada diseño es único. El tuyo también lo será.
        </p>
      </div>
    </section>
  );
}
