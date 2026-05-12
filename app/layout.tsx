import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Lunara — Mapas Estelares Personalizados",
  description:
    "Inmortalizá el cielo de tu momento más importante. Mapas estelares personalizados con precisión astronómica y diseño premium.",
  keywords: "mapa estelar, regalo personalizado, starmap, constelaciones, regalo romántico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="min-h-screen" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
