"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";
import Nav1 from "@/components/Nav1";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Hozirgi sahifa yo‘lini olish

  // Agar sahifa "/" bo'lsa, `bc-ba` classini qo‘shamiz
  const isHome = pathname === "/";

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"></link>
        <link href="https://fonts.googleapis.com/css2?family=Clicker+Script&family=Livvic:wght@100..900&family=Montserrat:wght@100..900&family=Playfair+Display:wght@400..900&family=Plus+Jakarta+Sans:wght@200..800&family=Poppins:wght@100..900&display=swap" rel="stylesheet"></link>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${isHome ? "bc-ba" : ""}`}>
        <div className="mxw-1440px mi-a">  
          <Nav1/>
          {children}
        </div>
        <footer className="h-800px bc-l">
          <h2>
            
          </h2>
        </footer>
      </body>
    </html>
  );
}
