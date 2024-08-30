import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import React, { PropsWithChildren } from "react";
import { Providers } from "./providers";

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Kiper Dynamic Links",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
