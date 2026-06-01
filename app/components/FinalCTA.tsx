"use client";

const STARS_BG = [
  { top: "10%", left: "8%", size: 2, delay: "0s", dur: "3.5s" },
  { top: "20%", left: "25%", size: 1.5, delay: "0.8s", dur: "4s" },
  { top: "15%", left: "60%", size: 1, delay: "0.3s", dur: "3s" },
  { top: "30%", left: "80%", size: 2, delay: "1.2s", dur: "5s" },
  { top: "70%", left: "5%", size: 1.5, delay: "0.6s", dur: "3.8s" },
  { top: "80%", left: "35%", size: 1, delay: "1s", dur: "4.2s" },
  { top: "75%", left: "70%", size: 2, delay: "0.4s", dur: "3.6s" },
  { top: "85%", left: "90%", size: 1.5, delay: "1.4s", dur: "4.8s" },
];

interface FinalCTAProps {
  configuratorUrl?: string;
}

export default function FinalCTA({ configuratorUrl = "#configurador" }: FinalCTAProps) {
  return (
    <section
      className="relative py-32 px-6 overflow-hidden"
      style={{ backgroundColor: "#0B132B" }}
    >
      {/* Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {STARS_BG.map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-twinkle"
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              backgroundColor: "#C5A46D",
              animationDelay: s.delay,
              animationDuration: s.dur,
            }}
          />
        ))}
      </div>

      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(197,164,109,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Urgency line */}
        <p
          className="text-sm mb-8"
          style={{
            color: "rgba(197,164,109,0.8)",
            fontFamily: "var(--font-poppins)",
            fontStyle: "italic",
          }}
        >
          Ese cielo nunca volverá a repetirse.
        </p>

        {/* Headline */}
        <h2
          className="mb-6"
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            color: "#F4F3EE",
            fontWeight: 500,
            lineHeight: 1.15,
          }}
        >
          Tu cielo. Tu historia.
          <br />
          <em style={{ color: "#C5A46D" }}>Para siempre.</em>
        </h2>

        {/* Sub */}
        <p
          className="text-base leading-relaxed mb-10"
          style={{
            color: "rgba(244,243,238,0.6)",
            fontFamily: "var(--font-poppins)",
            fontWeight: 300,
            maxWidth: 480,
            margin: "0 auto 40px",
          }}
        >
          Inmortalizá el cielo de tu momento más importante en un mapa estelar único,
          diseñado para durar toda una vida.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
          <a
            href={configuratorUrl}
            onClick={() => window.gtag?.("event", "cta_click", { button_location: "final_cta" })}
            className="inline-flex items-center gap-2 rounded-full font-medium transition-all duration-200"
            style={{
              backgroundColor: "#C5A46D",
              color: "#0B132B",
              padding: "16px 40px",
              fontSize: 16,
              fontFamily: "var(--font-poppins)",
              letterSpacing: "0.02em",
              whiteSpace: "nowrap",
            }}
          >
            Crea tu cielo
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="#0B132B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <p
          className="text-xs"
          style={{ color: "rgba(244,243,238,0.3)", fontFamily: "var(--font-poppins)" }}
        >
          Toma menos de 2 minutos. Sin tarjeta requerida para ver el diseño.
        </p>

        {/* Tagline */}
        <p
          className="mt-12 text-sm"
          style={{
            color: "rgba(197,164,109,0.5)",
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontStyle: "italic",
            letterSpacing: "0.05em",
          }}
        >
          &ldquo;Recordá la noche que lo cambió todo.&rdquo;
        </p>
      </div>
    </section>
  );
}
