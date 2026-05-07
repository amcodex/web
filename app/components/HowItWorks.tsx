interface HowItWorksProps {
  configuratorUrl?: string;
}

const steps = [
  {
    number: "01",
    title: "Elegís tu momento",
    desc: "Ingresás la fecha, hora y lugar exactos. Puede ser el día que se conocieron, el nacimiento de tu hijo, el aniversario — cualquier instante que importe.",
    detail: "El configurador es simple: en menos de 2 minutos tenés todo listo.",
  },
  {
    number: "02",
    title: "Personalizás el diseño",
    desc: "Elegís el título, el mensaje y el estilo visual. Podés previsualizar el resultado en tiempo real antes de confirmar.",
    detail: "Paleta oscura o clara, tipografías, composición — todo a tu gusto.",
  },
  {
    number: "03",
    title: "Lo recibís en horas",
    desc: "Digital de alta resolución al instante para que lo puedas imprimir donde quieras, o encargás la impresión física y lo enviamos a tu puerta.",
    detail: "Entrega digital inmediata · Impresión física en 24–48 hs.",
  },
];

export default function HowItWorks({ configuratorUrl = "#configurador" }: HowItWorksProps) {
  return (
    <section id="como-funciona" className="py-24 px-6" style={{ backgroundColor: "#F4F3EE" }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-widest uppercase mb-4"
            style={{ color: "#C5A46D", fontFamily: "var(--font-poppins)", letterSpacing: "0.2em" }}
          >
            Cómo funciona
          </p>
          <h2
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              color: "#0B132B",
              fontWeight: 500,
              lineHeight: 1.2,
            }}
          >
            Tres pasos. Un recuerdo eterno.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden md:block absolute top-10 left-1/6 right-1/6 h-px"
            style={{ backgroundColor: "rgba(197,164,109,0.2)", zIndex: 0 }}
          />

          {steps.map((step) => (
            <div key={step.number} className="flex flex-col gap-4 relative">
              {/* Number */}
              <div className="flex items-center gap-4 mb-2">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 relative z-10"
                  style={{
                    backgroundColor: "#0B132B",
                    border: "1px solid rgba(197,164,109,0.3)",
                  }}
                >
                  <span
                    className="text-xs font-medium"
                    style={{ color: "#C5A46D", fontFamily: "var(--font-poppins)", letterSpacing: "0.1em" }}
                  >
                    {step.number}
                  </span>
                </div>
              </div>

              <h3
                className="text-lg font-medium"
                style={{ color: "#0B132B", fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#8C8C8C", fontFamily: "var(--font-poppins)", fontWeight: 300 }}
              >
                {step.desc}
              </p>
              <p
                className="text-xs"
                style={{ color: "#C5A46D", fontFamily: "var(--font-poppins)", fontStyle: "italic" }}
              >
                {step.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <div className="text-center mb-10">
          <p
            className="text-base"
            style={{
              color: "#0B132B",
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontStyle: "italic",
              opacity: 0.7,
            }}
          >
            Eso es todo. Nosotros nos encargamos del resto.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-2">
          <a
            href={configuratorUrl}
            className="inline-flex items-center gap-2 rounded-full font-medium transition-all duration-200"
            style={{
              backgroundColor: "#0B132B",
              color: "#F4F3EE",
              padding: "14px 36px",
              fontSize: 15,
              fontFamily: "var(--font-poppins)",
              letterSpacing: "0.03em",
            }}
          >
            Empezá tu mapa
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="#F4F3EE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <p
            className="text-xs"
            style={{ color: "#8C8C8C", fontFamily: "var(--font-poppins)" }}
          >
            Toma menos de 2 minutos.
          </p>
        </div>
      </div>
    </section>
  );
}
