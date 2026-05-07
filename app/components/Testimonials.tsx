const testimonials = [
  {
    quote:
      "Es el único regalo que logró emocionarlo. Mi marido, que no llora nunca, se largó a llorar cuando lo vio. Nunca pensé que algo así pudiera significar tanto.",
    name: "María B.",
    context: "Aniversario de bodas",
    stars: 5,
    type: "pareja",
  },
  {
    quote:
      "Le regalé el cielo del día que nació mi hijo. Mi mamá lo enmarcó y lo tiene en la sala. Cada vez que viene alguien a casa pregunta qué es y ella lo cuenta con orgullo.",
    name: "Lucía F.",
    context: "Nacimiento de un hijo",
    stars: 5,
    type: "familia",
  },
  {
    quote:
      "No sabía qué regalar para San Valentín y esto fue perfecto. La sorpresa fue total. Lo hice con el cielo del día que nos conocimos y ella no podía creer que existiera algo así.",
    name: "Tomás R.",
    context: "San Valentín",
    stars: 5,
    type: "pareja",
  },
  {
    quote:
      "Mi hermana cumplía 30 y quería algo diferente. Lo encargué con el cielo de la noche en que nacimos las dos. Lloramos las dos. Esto no se compra en ningún negocio.",
    name: "Valentina C.",
    context: "Cumpleaños",
    stars: 5,
    type: "familia",
  },
];

const Stars = ({ count }: { count: number }) => (
  <span style={{ color: "#C5A46D", fontSize: 14 }}>{"★".repeat(count)}</span>
);

const badges: Record<string, string> = {
  pareja: "Pareja",
  familia: "Familia",
};

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24 px-6" style={{ backgroundColor: "#F4F3EE" }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-widest uppercase mb-4"
            style={{ color: "#C5A46D", fontFamily: "var(--font-poppins)", letterSpacing: "0.2em" }}
          >
            Lo que dicen
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
            Personas reales.
            <br />
            <em>Momentos reales.</em>
          </h2>
          <p
            className="mt-4 text-sm"
            style={{ color: "#8C8C8C", fontFamily: "var(--font-poppins)", fontWeight: 300 }}
          >
            No alcanza con que sea lindo. Tiene que significar algo.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col gap-5 p-8 rounded-2xl"
              style={{
                backgroundColor: "#fff",
                border: "1px solid rgba(197,164,109,0.12)",
                boxShadow: "0 4px 24px rgba(11,19,43,0.05)",
              }}
            >
              {/* Stars + badge */}
              <div className="flex items-center justify-between">
                <Stars count={t.stars} />
                <span
                  className="text-xs px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: "rgba(197,164,109,0.1)",
                    color: "#C5A46D",
                    fontFamily: "var(--font-poppins)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {badges[t.type]}
                </span>
              </div>

              {/* Quote */}
              <blockquote
                className="text-sm leading-relaxed flex-1"
                style={{
                  color: "#0B132B",
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontStyle: "italic",
                  lineHeight: 1.7,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div
                className="flex flex-col gap-0.5 pt-3"
                style={{ borderTop: "1px solid rgba(197,164,109,0.15)" }}
              >
                <span
                  className="text-sm font-medium"
                  style={{ color: "#0B132B", fontFamily: "var(--font-poppins)" }}
                >
                  {t.name}
                </span>
                <span
                  className="text-xs"
                  style={{ color: "#8C8C8C", fontFamily: "var(--font-poppins)" }}
                >
                  {t.context}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
