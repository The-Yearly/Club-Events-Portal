import type { Metadata } from "next";
import { Geist, Geist_Mono, Lalezar, Lekton, Outfit } from "next/font/google";
import "./globals.css";
const outfitSans = Outfit({
  variable: "--font-Outpfit",
  subsets: ["latin"],
});
const lalezarSans = Lalezar({
  variable: "--font-Lalezar",
  subsets: ["arabic"],
  weight: "400",
});
const lektonSans = Lekton({
  variable: "--font-Lekton",
  subsets: ["latin"],
  weight: "400",
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "amFOSS Workshop",
  description: "You'r First Step Into Freedom Starts Here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${lalezarSans.variable} ${outfitSans.variable} ${lektonSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
