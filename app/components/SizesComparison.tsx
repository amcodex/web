import Image from "next/image";

export default function SizesComparison() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#F4F3EE" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p
            className="text-xs tracking-widest uppercase mb-4"
            style={{ color: "#C5A46D", fontFamily: "var(--font-poppins)", letterSpacing: "0.2em" }}
          >
            Tamaños disponibles
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
            Elegí el tamaño que mejor
            <br />
            <em>se adapta a tu espacio.</em>
          </h2>
        </div>

        <div
          className="rounded-2xl overflow-hidden"
          style={{ boxShadow: "0 8px 40px rgba(11,19,43,0.1)" }}
        >
          <Image
            src="/lunara-sizes.png"
            alt="Comparativa de tamaños S, M y L del mapa estelar Lunara"
            width={1600}
            height={900}
            style={{ width: "100%", height: "auto", display: "block" }}
            priority={false}
          />
        </div>

        <div className="grid grid-cols-3 gap-6 mt-10">
          {[
            { size: "S", dims: "20 × 28 cm", desc: "Ideal para escritorios o repisas" },
            { size: "M", dims: "30 × 42 cm", desc: "Perfecto como pieza central de pared" },
            { size: "L", dims: "50 × 70 cm", desc: "Presencia total en cualquier habitación" },
          ].map((item) => (
            <div key={item.size} className="text-center">
              <div
                className="inline-flex items-center justify-center w-10 h-10 rounded-full mb-3"
                style={{ backgroundColor: "rgba(197,164,109,0.12)", color: "#C5A46D" }}
              >
                <span style={{ fontFamily: "var(--font-poppins)", fontWeight: 600, fontSize: "0.85rem" }}>
                  {item.size}
                </span>
              </div>
              <p
                className="text-sm font-medium mb-1"
                style={{ color: "#0B132B", fontFamily: "var(--font-poppins)" }}
              >
                {item.dims}
              </p>
              <p
                className="text-xs"
                style={{ color: "rgba(11,19,43,0.5)", fontFamily: "var(--font-poppins)" }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
