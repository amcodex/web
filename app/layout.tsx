import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";

const GA_ID = "G-D4DKCP7GRF";

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
    "Mapas estelares personalizados del momento que lo cambió todo. Calculados con datos astronómicos reales, diseñados como arte premium.",
  metadataBase: new URL("https://lunara-maps.com"),
  openGraph: {
    title: "Lunara — Mapas Estelares Personalizados",
    description:
      "Para quienes quieren regalar algo que realmente signifique algo. Mapas estelares personalizados del momento que lo cambió todo.",
    url: "https://lunara-maps.com",
    siteName: "Lunara",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lunara — Mapas Estelares Personalizados",
    description:
      "Para quienes quieren regalar algo que realmente signifique algo.",
  },
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
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
