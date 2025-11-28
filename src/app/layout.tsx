import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import BackgroundAnimation from "../components/background-animation";
import { ThemeProvider } from "@/components/theme-provider";
import { jsonLd } from "@/lib/json-ld";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tsvetomir | Senior Full Stack Developer",
  description:
    "Portfolio of Tsvetomir, a Senior Full Stack Developer specializing in React, Next.js, and Cloud Architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.className} relative z-10 min-h-screen bg-background font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <BackgroundAnimation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
