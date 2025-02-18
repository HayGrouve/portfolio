import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import BackgroundAnimation from "../components/background-animation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Project Portfolio",
  description: "A collection of my projects",
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
