import type { Metadata } from "next";
import { Playfair_Display, Nunito } from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Amparo Rozo — Corrección de estilo literario",
    template: "%s — Amparo Rozo",
  },
  description:
    "Corrección de estilo para novelas, memorias, crónicas y libros de crecimiento personal. Hecha a mano, palabra por palabra, sin inteligencia artificial.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${playfair.variable} ${nunito.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-cream text-ink antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
