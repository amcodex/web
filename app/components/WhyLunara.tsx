const comparisons = [
  {
    bad: "Decoración genérica",
    good: "Tu historia real",
    detail: "Cada mapa es único. Nadie en el mundo tiene el mismo cielo que el tuyo.",
  },
  {
    bad: "Arte al azar",
    good: "El cielo exacto de ese día",
    detail: "Calculamos la posición real de cada estrella para la fecha, hora y lugar que elegís.",
  },
  {
    bad: "Un regalo más",
    good: "Un recuerdo irrepetible",
    detail: "La persona que lo recibe entiende en segundos cuánto significa.",
  },
];

export default function WhyLunara() {
  return (
    <section id="por-que-lunara" className="py-24 px-6" style={{ backgroundColor: "#F4F3EE" }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-widest uppercase mb-4"
            style={{ color: "#C5A46D", fontFamily: "var(--font-poppins)", letterSpacing: "0.2em" }}
          >
            Por qué elegir Lunara
          </p>
          <h2
            className="mb-5"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              color: "#0B132B",
              fontWeight: 500,
              lineHeight: 1.2,
            }}
          >
            Cualquiera puede regalar algo lindo.
            <br />
            <em>Muy pocos regalan algo que signifique.</em>
          </h2>
          <div style={{ width: 48, height: 1, backgroundColor: "#C5A46D", margin: "0 auto" }} />
        </div>

        {/* Comparison grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {comparisons.map((item) => (
            <div
              key={item.good}
              className="flex flex-col gap-4 p-8 rounded-2xl"
              style={{ backgroundColor: "#fff", border: "1px solid rgba(197,164,109,0.15)" }}
            >
              {/* Not this */}
              <div className="flex items-center gap-3">
                <span
                  className="text-xs w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(11,19,43,0.06)", color: "#8C8C8C" }}
                >
                  ✕
                </span>
                <span
                  className="text-sm line-through"
                  style={{ color: "#8C8C8C", fontFamily: "var(--font-poppins)" }}
                >
                  {item.bad}
                </span>
              </div>

              {/* This */}
              <div className="flex items-center gap-3">
                <span
                  className="text-xs w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(197,164,109,0.15)", color: "#C5A46D" }}
                >
                  ✓
                </span>
                <span
                  className="text-sm font-medium"
                  style={{ color: "#0B132B", fontFamily: "var(--font-poppins)" }}
                >
                  {item.good}
                </span>
              </div>

              <p
                className="text-sm leading-relaxed"
                style={{ color: "#8C8C8C", fontFamily: "var(--font-poppins)", fontWeight: 300 }}
              >
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Use cases */}
        <div
          className="rounded-2xl p-8 md:p-12 text-center"
          style={{ backgroundColor: "#0B132B" }}
        >
          <p
            className="text-xs tracking-widest uppercase mb-4"
            style={{ color: "#C5A46D", fontFamily: "var(--font-poppins)", letterSpacing: "0.2em" }}
          >
            Perfecto para
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Aniversarios",
              "Cumpleaños",
              "Primer encuentro",
              "Nacimiento de un hijo",
              "Propuestas de matrimonio",
              "San Valentín",
              "Día de la Madre / el Padre",
            ].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full text-sm"
                style={{
                  border: "1px solid rgba(197,164,109,0.3)",
                  color: "rgba(244,243,238,0.8)",
                  fontFamily: "var(--font-poppins)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
