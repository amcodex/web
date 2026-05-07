"use client";

import { useMemo } from "react";

interface StarMapMockupProps {
  title?: string;
  subtitle?: string;
  date?: string;
  location?: string;
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
}

const STAR_DATA = [
  { cx: 50, cy: 30, r: 1.5 }, { cx: 120, cy: 55, r: 1 }, { cx: 80, cy: 90, r: 2 },
  { cx: 160, cy: 40, r: 1.2 }, { cx: 200, cy: 80, r: 1.8 }, { cx: 240, cy: 50, r: 1 },
  { cx: 30, cy: 130, r: 1.5 }, { cx: 100, cy: 150, r: 1 }, { cx: 170, cy: 120, r: 2.2 },
  { cx: 220, cy: 130, r: 1.3 }, { cx: 260, cy: 100, r: 1 }, { cx: 60, cy: 180, r: 1.8 },
  { cx: 140, cy: 200, r: 1.2 }, { cx: 200, cy: 170, r: 1.5 }, { cx: 250, cy: 190, r: 1 },
  { cx: 40, cy: 220, r: 2 }, { cx: 110, cy: 240, r: 1 }, { cx: 180, cy: 230, r: 1.7 },
  { cx: 230, cy: 220, r: 1.2 }, { cx: 270, cy: 240, r: 1 }, { cx: 70, cy: 260, r: 1.5 },
  { cx: 150, cy: 270, r: 2 }, { cx: 210, cy: 260, r: 1 }, { cx: 90, cy: 300, r: 1.3 },
  { cx: 160, cy: 310, r: 1.8 }, { cx: 240, cy: 290, r: 1.2 }, { cx: 30, cy: 290, r: 1 },
  { cx: 130, cy: 330, r: 1.5 }, { cx: 200, cy: 340, r: 1 }, { cx: 260, cy: 330, r: 1.8 },
  { cx: 55, cy: 350, r: 1.2 }, { cx: 110, cy: 370, r: 2 }, { cx: 180, cy: 365, r: 1 },
  { cx: 230, cy: 360, r: 1.5 }, { cx: 270, cy: 370, r: 1 },
];

const CONSTELLATION_LINES = [
  [{ cx: 80, cy: 90 }, { cx: 120, cy: 55 }, { cx: 160, cy: 40 }, { cx: 200, cy: 80 }],
  [{ cx: 30, cy: 130 }, { cx: 80, cy: 90 }, { cx: 100, cy: 150 }, { cx: 170, cy: 120 }],
  [{ cx: 170, cy: 120 }, { cx: 220, cy: 130 }, { cx: 200, cy: 80 }],
  [{ cx: 140, cy: 200 }, { cx: 100, cy: 150 }, { cx: 60, cy: 180 }, { cx: 40, cy: 220 }],
  [{ cx: 140, cy: 200 }, { cx: 180, cy: 230 }, { cx: 200, cy: 170 }, { cx: 250, cy: 190 }],
  [{ cx: 110, cy: 240 }, { cx: 150, cy: 270 }, { cx: 160, cy: 310 }, { cx: 130, cy: 330 }],
  [{ cx: 210, cy: 260 }, { cx: 240, cy: 290 }, { cx: 200, cy: 340 }, { cx: 230, cy: 360 }],
];

export default function StarMapMockup({
  title = "Para siempre juntos",
  subtitle = "El cielo de nuestro primer encuentro",
  date = "14 de Febrero, 2021",
  location = "Buenos Aires, Argentina",
  variant = "dark",
  size = "md",
}: StarMapMockupProps) {
  const isDark = variant === "dark";
  const bgColor = isDark ? "#0B132B" : "#F4F3EE";
  const starColor = isDark ? "#C5A46D" : "#0B132B";
  const textColor = isDark ? "#F4F3EE" : "#0B132B";
  const accentColor = "#C5A46D";
  const gridColor = isDark ? "rgba(197,164,109,0.12)" : "rgba(11,19,43,0.08)";

  const sizeMap = { sm: 280, md: 360, lg: 440 };
  const w = sizeMap[size];
  const h = Math.round(w * 1.3);
  const mapH = Math.round(w * 0.85);
  const cx = w / 2;
  const cy = mapH / 2;
  const r = Math.round(w * 0.42);

  const scaledStars = useMemo(() =>
    STAR_DATA.map(s => ({
      ...s,
      cx: Math.round((s.cx / 300) * w),
      cy: Math.round((s.cy / 400) * mapH),
    })), [w, mapH]);

  const scaledLines = useMemo(() =>
    CONSTELLATION_LINES.map(line =>
      line.map(p => ({
        cx: Math.round((p.cx / 300) * w),
        cy: Math.round((p.cy / 400) * mapH),
      }))
    ), [w, mapH]);

  const pathD = (points: { cx: number; cy: number }[]) =>
    points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.cx} ${p.cy}`).join(" ");

  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      {/* Frame background */}
      <rect width={w} height={h} rx={4} fill={bgColor} />

      {/* Subtle border */}
      <rect
        x={1} y={1} width={w - 2} height={h - 2}
        rx={3} fill="none"
        stroke={accentColor} strokeWidth={0.5} strokeOpacity={0.4}
      />

      {/* Grid lines */}
      {[0.2, 0.4, 0.6, 0.8].map((t) => (
        <line
          key={`h${t}`}
          x1={0} y1={mapH * t} x2={w} y2={mapH * t}
          stroke={gridColor} strokeWidth={0.5}
        />
      ))}
      {[0.2, 0.4, 0.6, 0.8].map((t) => (
        <line
          key={`v${t}`}
          x1={w * t} y1={0} x2={w * t} y2={mapH}
          stroke={gridColor} strokeWidth={0.5}
        />
      ))}

      {/* Star map clip circle */}
      <defs>
        <clipPath id={`circle-clip-${size}`}>
          <circle cx={cx} cy={cy} r={r} />
        </clipPath>
        <radialGradient id={`star-glow-${size}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={accentColor} stopOpacity={0.15} />
          <stop offset="100%" stopColor={accentColor} stopOpacity={0} />
        </radialGradient>
      </defs>

      {/* Circle background */}
      <circle cx={cx} cy={cy} r={r} fill={isDark ? "#0d1730" : "#e8e7e2"} />
      <circle cx={cx} cy={cy} r={r} fill={`url(#star-glow-${size})`} />

      {/* Constellation lines */}
      <g clipPath={`url(#circle-clip-${size})`}>
        {scaledLines.map((line, i) => (
          <path
            key={i}
            d={pathD(line)}
            stroke={accentColor}
            strokeWidth={0.6}
            strokeOpacity={0.35}
            fill="none"
          />
        ))}

        {/* Stars */}
        {scaledStars.map((star, i) => (
          <circle
            key={i}
            cx={star.cx}
            cy={star.cy}
            r={star.r}
            fill={starColor}
            opacity={0.7 + (i % 3) * 0.1}
          />
        ))}

        {/* Bright accent stars */}
        <circle cx={cx - 20} cy={cy - 30} r={2.5} fill={accentColor} opacity={0.9} />
        <circle cx={cx + 35} cy={cy + 10} r={2} fill={accentColor} opacity={0.85} />
        <circle cx={cx - 45} cy={cy + 25} r={1.8} fill="#fff" opacity={0.8} />
      </g>

      {/* Circle border */}
      <circle
        cx={cx} cy={cy} r={r}
        stroke={accentColor} strokeWidth={0.8} strokeOpacity={0.5} fill="none"
      />

      {/* Text area */}
      <line
        x1={w * 0.2} y1={mapH + 18}
        x2={w * 0.8} y2={mapH + 18}
        stroke={accentColor} strokeWidth={0.5} strokeOpacity={0.5}
      />

      <text
        x={cx} y={mapH + 38}
        textAnchor="middle"
        fill={textColor}
        fontSize={size === "sm" ? 11 : size === "md" ? 13 : 15}
        fontFamily="var(--font-playfair), Georgia, serif"
        fontWeight={500}
        letterSpacing={0.5}
      >
        {title}
      </text>

      <text
        x={cx} y={mapH + 56}
        textAnchor="middle"
        fill={accentColor}
        fontSize={size === "sm" ? 7 : size === "md" ? 8 : 9}
        fontFamily="var(--font-poppins), sans-serif"
        letterSpacing={1.5}
        fontWeight={400}
        opacity={0.9}
      >
        {date.toUpperCase()}
      </text>

      <text
        x={cx} y={mapH + 72}
        textAnchor="middle"
        fill={textColor}
        fontSize={size === "sm" ? 7 : size === "md" ? 8 : 9}
        fontFamily="var(--font-poppins), sans-serif"
        letterSpacing={0.8}
        opacity={0.6}
      >
        {location}
      </text>

      <line
        x1={w * 0.2} y1={h - 16}
        x2={w * 0.8} y2={h - 16}
        stroke={accentColor} strokeWidth={0.5} strokeOpacity={0.5}
      />
    </svg>
  );
}
