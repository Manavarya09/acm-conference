import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif, Roboto_Condensed } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { event } from "@/content/event";
import "./globals.css";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto-condensed",
  display: "swap",
});

// Faces for the reference-inspired sections: Geist for large headings,
// Geist Mono for detail lines, Instrument Serif for the speaker headings.
const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: event.title,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${robotoCondensed.variable} ${geist.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
