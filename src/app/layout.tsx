import React from 'react'; // Add import statement for React
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

import PrelineScript from "./components/PrelineScript";

export const metadata: Metadata = {
  title: "Nicklaus Vega",
  description: "Portfolio of Nicklaus Vega",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <PrelineScript />
      <body>{children}</body>
    </html>
  );
}
