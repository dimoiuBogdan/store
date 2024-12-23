import type { Metadata } from "next";
import localFont from "next/font/local";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import type { JSX, ReactNode } from "react";
import "./globals.css";
import Providers from "./providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Online Store - Template",
  description: "Online Store Template built with Next.js and TailwindCSS",
};

export default async function LocaleLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): Promise<JSX.Element> {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} scrollbar-custom bg-background text-zinc-200 antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
