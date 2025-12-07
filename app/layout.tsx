import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avenue Atelier",
  description: "Designed in Stockholm. Made in Italy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
