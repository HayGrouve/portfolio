import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import BackgroundAnimation from "../components/background-animation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Project Portfolio",
  description: "A collection of my projects",
  openGraph: {
    type: "website",
    url: "https://portfolio-sigma-eight-91.vercel.app/",
    images: [
      {
        url: "https://portfolio-sigma-eight-91.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "My Project Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} relative z-10`}>
        <BackgroundAnimation />
        {children}
      </body>
    </html>
  );
}
