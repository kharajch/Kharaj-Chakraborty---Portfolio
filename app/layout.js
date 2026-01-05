import { Geist, Geist_Mono } from "next/font/google";
import "./assets/css/Welcome.css"
import "./assets/css/animista.css"
import "./assets/css/Navbar.css"
import "./assets/css/Home.css"
import "./assets/css/About.css"
import "./assets/css/Projects.css"
import "./assets/css/Contact.css"
import "./assets/css/Not-found.css"
import "./globals.css";

import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kharaj Chakraborty - Portfolio",
  description: `Building the web of tomorrow, one line of code at a time. I am Kharaj Chakraborty, a Full Stack Developer specializing in React & NextJS. I engineer scalable, high-performance digital solutions that drive growth. From backend architecture to intuitive front-end design, let’s turn your complex problems into elegant code.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <link href="https://fonts.googleapis.com/css2?family=Stack+Sans+Text:wght@200..700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Cascadia+Mono:ital,wght@0,200..700;1,200..700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Stack+Sans+Notch:wght@200..700&display=swap" rel="stylesheet" />

      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="main">
          <Navbar />
        {children}
        </div>
      <footer><p>&copy; 2026 kharajch. All rights reserved.</p></footer>
      </body>
    </html>
  );
}
