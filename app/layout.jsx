"use client";

import { usePathname } from "next/navigation";
import "./globals.css";
import styles from "./layout.module.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <html lang="en">
      <head>
        <title>Visa project</title>
        <meta name="description" content="Zo'r loyiha!" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Clicker+Script&family=Livvic:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        ></link>
      </head>
      <body
        className={`${styles.body} ${isHome ? styles.body_background : ""}`}
      >
        <div className={styles.container}>
          <Nav />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
