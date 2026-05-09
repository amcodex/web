import StarMapMockup from "./StarMapMockup";

interface HeroProps {
  configuratorUrl?: string;
}

const STARS = [
  { top: "8%", left: "5%", size: 2, delay: "0s", dur: "3s" },
  { top: "15%", left: "18%", size: 1.5, delay: "0.5s", dur: "4s" },
  { top: "25%", left: "8%", size: 1, delay: "1s", dur: "3.5s" },
  { top: "10%", left: "35%", size: 2, delay: "0.3s", dur: "5s" },
  { top: "20%", left: "55%", size: 1.5, delay: "0.8s", dur: "3.2s" },
  { top: "5%", left: "72%", size: 1, delay: "1.2s", dur: "4.5s" },
  { top: "18%", left: "85%", size: 2, delay: "0.2s", dur: "3.8s" },
  { top: "30%", left: "92%", size: 1.5, delay: "0.7s", dur: "4.2s" },
  { top: "40%", left: "3%", size: 1, delay: "0.4s", dur: "3.6s" },
  { top: "50%", left: "12%", size: 2, delay: "1.5s", dur: "4.8s" },
  { top: "60%", left: "88%", size: 1.5, delay: "0.9s", dur: "3.4s" },
  { top: "70%", left: "95%", size: 1, delay: "0.6s", dur: "5.2s" },
  { top: "35%", left: "48%", size: 1, delay: "1.8s", dur: "3.9s" },
  { top: "45%", left: "78%", size: 1.5, delay: "0.1s", dur: "4.1s" },
  { top: "55%", left: "25%", size: 1, delay: "1.3s", dur: "3.7s" },
  { top: "65%", left: "60%", size: 2, delay: "0.4s", dur: "4.6s" },
  { top: "75%", left: "40%", size: 1, delay: "1.1s", dur: "5s" },
  { top: "80%", left: "72%", size: 1.5, delay: "0.8s", dur: "3.3s" },
  { top: "85%", left: "15%", size: 1, delay: "1.6s", dur: "4.4s" },
  { top: "90%", left: "50%", size: 2, delay: "0.3s", dur: "3.1s" },
];

export default function Hero({ configuratorUrl = "#configurador" }: HeroProps) {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#0B132B" }}
    >
      {/* Star field */}
      <div className="absolute inset-0 pointer-events-none">
        {STARS.map((s, i) => (
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

      {/* Radial glow behind map */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(197,164,109,0.08) 0%, transparent 70%)",
          transform: "translateY(-50%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
        {/* Left: copy */}
        <div className="flex flex-col gap-8">
          {/* Social proof pill — above the fold */}
          <div
            className="inline-flex items-center gap-3 self-start px-4 py-2 rounded-full"
            style={{
              backgroundColor: "rgba(197,164,109,0.12)",
              border: "1px solid rgba(197,164,109,0.25)",
            }}
          >
            <span style={{ color: "#C5A46D", fontSize: 13 }}>★★★★★</span>
            <span
              className="text-xs"
              style={{ color: "rgba(244,243,238,0.8)", fontFamily: "var(--font-poppins)" }}
            >
              &quot;El único regalo que logró emocionarlo.&quot; — María B.
            </span>
          </div>

          {/* Pre-headline */}
          <p
            className="text-sm tracking-widest uppercase"
            style={{ color: "#C5A46D", fontFamily: "var(--font-poppins)", letterSpacing: "0.18em" }}
          >
            Mapas estelares personalizados
          </p>

          {/* Main headline */}
          <h1
            className="leading-tight"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              color: "#F4F3EE",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 500,
              lineHeight: 1.15,
            }}
          >
            Para quienes quieren regalar algo
            <br />
            <em style={{ color: "#C5A46D" }}>que realmente signifique algo.</em>
          </h1>

          {/* Sub-headline: product description + urgency */}
          <div className="flex flex-col gap-3">
            <p
              className="text-base leading-relaxed"
              style={{ color: "rgba(244,243,238,0.75)", fontFamily: "var(--font-poppins)", fontWeight: 300 }}
            >
              Mapas estelares personalizados del momento que lo cambió todo.
            </p>
            <p
              className="text-sm"
              style={{ color: "rgba(197,164,109,0.9)", fontFamily: "var(--font-poppins)", fontStyle: "italic" }}
            >
              No podés repetir la noche. Sí podés conservarla.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-3">
            <a
              href={configuratorUrl}
              className="inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 self-start"
              style={{
                backgroundColor: "#C5A46D",
                color: "#0B132B",
                padding: "14px 32px",
                fontSize: 15,
                fontFamily: "var(--font-poppins)",
                letterSpacing: "0.03em",
              }}
            >
              Crea tu cielo
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="#0B132B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <p
              className="text-xs"
              style={{ color: "rgba(244,243,238,0.45)", fontFamily: "var(--font-poppins)" }}
            >
              Toma menos de 2 minutos.
            </p>
          </div>

          {/* Stats row */}
          <div
            className="flex items-center gap-8 pt-2"
            style={{ borderTop: "1px solid rgba(197,164,109,0.15)" }}
          >
            {[
              { value: "+200", label: "mapas creados" },
              { value: "100%", label: "personalizados" },
              { value: "24 hs", label: "entrega digital" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-0.5">
                <span
                  className="font-semibold"
                  style={{ color: "#C5A46D", fontFamily: "var(--font-playfair)", fontSize: 18 }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-xs"
                  style={{ color: "rgba(244,243,238,0.45)", fontFamily: "var(--font-poppins)" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Star map mockup */}
        <div className="flex justify-center lg:justify-end">
          <div
            className="animate-float rounded-2xl overflow-hidden"
            style={{
              boxShadow: "0 40px 80px rgba(0,0,0,0.4), 0 0 60px rgba(197,164,109,0.08)",
            }}
          >
            <StarMapMockup
              title="Para siempre juntos"
              date="14 de Febrero, 2021"
              location="Buenos Aires, Argentina"
              variant="dark"
              size="lg"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "rgba(244,243,238,0.3)" }}
      >
        <span className="text-xs tracking-widest" style={{ fontFamily: "var(--font-poppins)", letterSpacing: "0.2em" }}>
          DESCUBRÍ MÁS
        </span>
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
          <path d="M8 0v16M2 12l6 6 6-6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
