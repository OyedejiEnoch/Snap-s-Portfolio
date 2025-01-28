import type { Metadata } from "next";
import {Archivo} from 'next/font/google';
import "./globals.css";

const archivo =Archivo({
  display:'swap',
  weight:'variable',
  subsets:['latin'],
  variable:'--font-archivo'
})

export const metadata: Metadata = {
  title: "Minimal Single Page Portfolio",
  description: "Created For Snap's Photography",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} font-sans antialiased bg-white text-stone-900`}>{children}</body>
    </html>
  );
}
