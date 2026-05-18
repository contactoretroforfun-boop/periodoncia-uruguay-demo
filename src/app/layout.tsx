import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Periodoncia Uruguay | Especialistas en Periodoncia y Ortodoncia en Montevideo",
  description: "Clínica odontológica de alta especialización en Montevideo. Especialistas en periodoncia, ortodoncia, implantes y rehabilitación oral. Atención premium y personalizada para reconstruir tu sonrisa.",
  keywords: "periodoncia uruguay, periodoncista montevideo, ortodoncia montevideo, implantes dentales uruguay, clinica dental montevideo, dra fabiana villarnobo, sangrado de encias, salud periodontal, odontologia premium montevideo",
  authors: [{ name: "Dra. Fabiana Villarnobo" }],
  metadataBase: new URL("https://periodonciauruguay.com.uy"), // Fallback base URL for metadata
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Periodoncia Uruguay | Especialistas en Periodoncia y Ortodoncia",
    description: "Tratamientos avanzados de salud de encías, ortodoncia e implantes en Montevideo. Atención médica premium y personalizada.",
    url: "/",
    siteName: "Periodoncia Uruguay",
    images: [
      {
        url: "/facebook-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Clínica Periodoncia Uruguay - Especialidades Odontológicas",
      },
    ],
    locale: "es_UY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Periodoncia Uruguay | Clínica Odontológica Especializada",
    description: "Especialistas en periodoncia y ortodoncia en Montevideo. Reconstrucción de sonrisas con atención personalizada.",
    images: ["/facebook-cover.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${plusJakarta.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#FCFDFD] text-gray-800 font-sans">
        {children}
      </body>
    </html>
  );
}

