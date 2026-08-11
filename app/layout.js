import { DM_Serif_Display, Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import BackgroundCanvas from "@/components/BackgroundCanvas";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Swati Singh | AI/ML Engineer",
  description: "Personal Editorial Portfolio of Swati Singh — AI/ML Engineer, LLMs, RAG & MLOps",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="antialiased selection:bg-[#7B2D3C] selection:text-[#FDFBF7] bg-[#FDFBF7] text-[#1F1D1A]">
        <BackgroundCanvas />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}