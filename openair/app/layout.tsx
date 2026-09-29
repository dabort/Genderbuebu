import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://genderbuebuopenair.ch"),

  title: {
    default: "Genderbüebu Open Air | Gampel",
    template: "%s | Genderbüebu Open Air",
  },

  description:
    "Genderbüebu Open Air – Musik, Stimmung und echte Walliser Open-Air-Kultur auf der Festwiese Stapfen in Gampel.",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "https://pub-894f6ed26225410c96c9a46e36ef0199.r2.dev/openair/branding/edelweiss.png",
    shortcut: "https://pub-894f6ed26225410c96c9a46e36ef0199.r2.dev/openair/branding/edelweiss.png",
    apple: "https://pub-894f6ed26225410c96c9a46e36ef0199.r2.dev/openair/branding/edelweiss.png",
  },

  openGraph: {
    type: "website",
    locale: "de_CH",
    url: "/",
    siteName: "Genderbüebu Open Air",
    title: "Genderbüebu Open Air | Gampel",
    description:
      "Genderbüebu Open Air – Musik, Stimmung und echte Walliser Open-Air-Kultur auf der Festwiese Stapfen in Gampel.",
  },

  twitter: {
    card: "summary",
    title: "Genderbüebu Open Air | Gampel",
    description:
      "Genderbüebu Open Air – Musik, Stimmung und echte Walliser Open-Air-Kultur auf der Festwiese Stapfen in Gampel.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
