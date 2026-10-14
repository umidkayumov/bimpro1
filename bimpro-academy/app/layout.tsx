import type { Metadata } from "next";
import {
  Geist,
  Hanken_Grotesk,
  Inter,
  Plus_Jakarta_Sans,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin", "cyrillic"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BIMPro Academy — BIM-loyihalash va avtomatlashtirishni amalda o'rganing",
  description:
    "BIM-loyihalash, qurilish boshqaruvi va avtomatlashtirish bo'yicha amaliy ta'lim platformasi. Revit MEP, Architecture, Structure va BIM menejment kurslari, O'zbekiston QMQ/ShNK standartlari asosida.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="uz"
      className={`${geist.variable} ${hanken.variable} ${inter.variable} ${jakarta.variable} ${spaceGrotesk.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
