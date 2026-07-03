import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { content } from "@/lib/content";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const { meta } = content;

export const metadata: Metadata = {
  metadataBase: new URL(meta.siteUrl),
  title: `${meta.name} — Software Engineer`,
  description: meta.description,
  openGraph: {
    title: `${meta.name} — Software Engineer`,
    description: meta.tagline,
    url: meta.siteUrl,
    siteName: meta.name,
    type: "website",
    images: [{ url: meta.headshot, width: 800, height: 800, alt: meta.name }],
  },
  twitter: {
    card: "summary",
    title: `${meta.name} — Software Engineer`,
    description: meta.tagline,
    images: [meta.headshot],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
