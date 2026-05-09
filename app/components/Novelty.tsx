import StarMapMockup from "./StarMapMockup";

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="#C5A46D" strokeWidth="1.5" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M16.9 16.9l2.1 2.1M4.9 19.1l2.1-2.1M16.9 7.1l2.1-2.1" stroke="#C5A46D" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Calculado con datos astronómicos reales",
    desc: "Usamos efemérides precisas para calcular la posición de cada estrella visible en tu cielo — no es una ilustración genérica.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#C5A46D" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="12" cy="9" r="2.5" stroke="#C5A46D" strokeWidth="1.5" />
      </svg>
    ),
    title: "Personalizado con fecha, hora y lugar exactos",
    desc: "Ingresás el día, la hora y las coordenadas de tu momento. El resultado es único en el mundo — literalmente tu cielo.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="#C5A46D" strokeWidth="1.5" />
        <path d="M7 8h10M7 12h7M7 16h5" stroke="#C5A46D" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Diseñado como pieza de arte premium, no como souvenir",
    desc: "Tipografía, composición y paleta pensadas para que cuelgue con orgullo en una pared, no que se pierda en un cajón.",
  },
];

export default function Novelty() {
  return (
    <section
      className="py-24 px-6"
      style={{ backgroundColor: "#0B132B" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: mockups */}
          <div className="flex justify-center relative">
            <div
              className="relative"
              style={{ width: 320, height: 420 }}
            >
              {/* Back card */}
              <div
                className="absolute rounded-2xl overflow-hidden"
                style={{
                  top: 30,
                  left: 30,
                  transform: "rotate(4deg)",
                  opacity: 0.6,
                  boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                }}
              >
                <StarMapMockup
                  title="Nuestro primer viaje"
                  date="22 de Junio, 2019"
                  location="Madrid, España"
                  variant="dark"
                  size="md"
                />
              </div>
              {/* Front card */}
              <div
                className="absolute rounded-2xl overflow-hidden"
                style={{
                  top: 0,
                  left: 0,
                  boxShadow: "0 30px 80px rgba(0,0,0,0.5), 0 0 40px rgba(197,164,109,0.1)",
                }}
              >
                <StarMapMockup
                  title="El día que dijiste sí"
                  date="8 de Marzo, 2023"
                  location="Mendoza, Argentina"
                  variant="dark"
                  size="md"
                />
              </div>
            </div>
          </div>

          {/* Right: copy */}
          <div className="flex flex-col gap-10">
            <div>
              <p
                className="text-xs tracking-widest uppercase mb-4"
                style={{ color: "#C5A46D", fontFamily: "var(--font-poppins)", letterSpacing: "0.2em" }}
              >
                Lo que hace diferente a Lunara
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                  color: "#F4F3EE",
                  fontWeight: 500,
                  lineHeight: 1.2,
                }}
              >
                No es un póster.
                <br />
                <em style={{ color: "#C5A46D" }}>Es un momento convertido en arte.</em>
              </h2>
            </div>

            <div className="flex flex-col gap-6">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4 items-start">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: "rgba(197,164,109,0.1)" }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <h3
                      className="text-sm font-medium mb-1"
                      style={{ color: "#F4F3EE", fontFamily: "var(--font-poppins)" }}
                    >
                      {f.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(244,243,238,0.55)", fontFamily: "var(--font-poppins)", fontWeight: 300 }}
                    >
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
