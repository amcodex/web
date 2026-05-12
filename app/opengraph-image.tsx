import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Lunara — Mapas Estelares Personalizados";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          backgroundColor: "#0B132B",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Stars decorativas */}
        {[
          [80, 60], [200, 120], [950, 80], [1100, 200], [60, 400],
          [1050, 450], [300, 500], [900, 520], [600, 80], [700, 560],
          [150, 280], [1000, 300], [450, 520], [820, 150], [500, 200],
        ].map(([x, y], i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: x,
              top: y,
              width: i % 3 === 0 ? 3 : 2,
              height: i % 3 === 0 ? 3 : 2,
              borderRadius: "50%",
              backgroundColor: "#C5A46D",
              opacity: 0.6 + (i % 4) * 0.1,
            }}
          />
        ))}

        {/* Glow central */}
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(197,164,109,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Logo círculo */}
        <div
          style={{
            width: 90,
            height: 90,
            borderRadius: "50%",
            border: "1.5px solid rgba(197,164,109,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 32,
          }}
        >
          <span style={{ color: "#F4F3EE", fontSize: 16, letterSpacing: 3 }}>LUNARA</span>
        </div>

        {/* Headline */}
        <div
          style={{
            color: "#F4F3EE",
            fontSize: 52,
            fontWeight: 500,
            textAlign: "center",
            lineHeight: 1.2,
            maxWidth: 800,
            marginBottom: 20,
          }}
        >
          Para quienes quieren regalar algo
        </div>
        <div
          style={{
            color: "#C5A46D",
            fontSize: 52,
            fontWeight: 500,
            fontStyle: "italic",
            textAlign: "center",
            marginBottom: 36,
          }}
        >
          que realmente signifique algo.
        </div>

        {/* Divider */}
        <div
          style={{
            width: 60,
            height: 1,
            backgroundColor: "#C5A46D",
            marginBottom: 28,
            opacity: 0.6,
          }}
        />

        {/* Tagline */}
        <div
          style={{
            color: "rgba(244,243,238,0.5)",
            fontSize: 20,
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          Mapas estelares personalizados
        </div>
      </div>
    ),
    { ...size }
  );
}
