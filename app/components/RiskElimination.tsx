const guarantees = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L3 6v6c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V6l-8-4z" stroke="#C5A46D" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M7.5 11l2.5 2.5 5-5" stroke="#C5A46D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Revisión antes de imprimir",
    desc: "Si elegís la versión impresa, te mostramos el diseño final para que lo apruebes antes de enviarlo a producción. Sin sorpresas.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="7" width="16" height="12" rx="2" stroke="#C5A46D" strokeWidth="1.5" />
        <path d="M7 7V5a4 4 0 018 0v2" stroke="#C5A46D" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Digital al instante, sin riesgo",
    desc: "Podés ver el preview inmediatamente antes de comprometer nada más.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M2 6.5A14.5 14.5 0 006.5 20h9A14.5 14.5 0 0020 6.5" stroke="#C5A46D" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="11" cy="6" r="3" stroke="#C5A46D" strokeWidth="1.5" />
        <path d="M11 9v4M9 13h4" stroke="#C5A46D" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Te acompañamos en todo el proceso",
    desc: "Estamos disponibles por WhatsApp e Instagram para ayudarte con cualquier duda antes, durante y después del pedido. No estás solo.",
  },
];

export default function RiskElimination() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#fff" }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p
              className="text-xs tracking-widest uppercase mb-4"
              style={{ color: "#C5A46D", fontFamily: "var(--font-poppins)", letterSpacing: "0.2em" }}
            >
              Sin riesgos
            </p>
            <h2
              className="mb-6"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                color: "#0B132B",
                fontWeight: 500,
                lineHeight: 1.2,
              }}
            >
              ¿Tenés dudas?
              <br />
              <em>Te acompañamos.</em>
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "#8C8C8C", fontFamily: "var(--font-poppins)", fontWeight: 300 }}
            >
              Entendemos que esto es un regalo importante. Por eso no te dejamos solo. Podés hacer preguntas antes de comprar, ver el diseño antes de imprimir, y contactarnos en cualquier momento.
            </p>
            <p
              className="text-sm"
              style={{
                color: "#0B132B",
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontStyle: "italic",
              }}
            >
              No estás comprando algo importante solo. Estamos acá.
            </p>
          </div>

          {/* Right: guarantees */}
          <div className="flex flex-col gap-6">
            {guarantees.map((g) => (
              <div
                key={g.title}
                className="flex gap-4 p-6 rounded-2xl"
                style={{
                  backgroundColor: "#F4F3EE",
                  border: "1px solid rgba(197,164,109,0.1)",
                }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "rgba(197,164,109,0.1)" }}
                >
                  {g.icon}
                </div>
                <div>
                  <h3
                    className="text-sm font-medium mb-1"
                    style={{ color: "#0B132B", fontFamily: "var(--font-poppins)" }}
                  >
                    {g.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#8C8C8C", fontFamily: "var(--font-poppins)", fontWeight: 300 }}
                  >
                    {g.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
