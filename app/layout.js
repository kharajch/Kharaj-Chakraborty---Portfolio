import { Geist, Geist_Mono } from "next/font/google";
import "./animista.css"
import "./Navbar.css"
import "./Home.css"
import "./About.css"
import "./Projects.css"
import "./Contact.css"
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
