interface LunaraLogoProps {
  variant?: "dark" | "light";
  size?: number;
}

export default function LunaraLogo({ variant = "dark", size = 48 }: LunaraLogoProps) {
  const strokeColor = variant === "dark" ? "#0B132B" : "#F4F3EE";
  const textColor = variant === "dark" ? "#0B132B" : "#F4F3EE";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="60" cy="60" r="56" stroke={strokeColor} strokeWidth="1.5" />
      <text
        x="60"
        y="66"
        textAnchor="middle"
        fill={textColor}
        fontSize="22"
        fontFamily="var(--font-playfair), Georgia, serif"
        fontWeight="500"
        letterSpacing="4"
      >
        LUNARA
      </text>
    </svg>
  );
}
