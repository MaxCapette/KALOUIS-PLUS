import type { Metadata } from "next";
import { Space_Mono } from 'next/font/google';  // Importer Space Mono avec les poids spécifiés
import "./globals.css";

const spaceMono = Space_Mono({ 
  subsets: ["latin"],
  weight: ["400", "700"], // Spécifier les poids disponibles
});

export const metadata: Metadata = {
  title: "KALOUIS PLUS",
  description: "Bienvenue sur le site de KALOUIS PLUS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceMono.className}> {/* Utiliser Space Mono */}
        {children}
      </body>
    </html>
  );
}
