"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import the router hook

const Welcome = () => {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const router = useRouter(); // Initialize the router

  const fullText = [
    "INITIALIZING SYSTEM PROTOCOLS...",
    "Loading modules... [OK]",
    "Verifying user identity... [VERIFIED]",
    "Establishing secure connection...",
    "> ACCESS GRANTED. REDIRECTING..."
  ];

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    let currentText = "";
    let timeoutId;

    const typeWriter = () => {
      if (lineIndex < fullText.length) {
        const currentLineString = fullText[lineIndex];

        if (charIndex < currentLineString.length) {
          currentText += currentLineString.charAt(charIndex);
          // Rebuild the string with <br> for previous lines
          const previousLines = fullText.slice(0, lineIndex).join("<br/>");
          setText((previousLines ? previousLines + "<br/>" : "") + currentText);
          
          charIndex++;
          timeoutId = setTimeout(typeWriter, 40); // slightly faster typing speed
        } else {
          // Line finished
          lineIndex++;
          charIndex = 0;
          currentText = "";
          timeoutId = setTimeout(typeWriter, 250); // Pause between lines
        }
      } else {
        // --- TYPING FINISHED: START REDIRECT LOGIC ---
        setShowCursor(true);
        setTimeout(() => {
          router.push("/Home"); // Redirects after 2 seconds
        }, 2000);
      }
    };

    typeWriter();

    return () => clearTimeout(timeoutId);
  }, [router]);

  // Handler for the manual skip button
  const handleManualEntry = () => {
    router.push("/Home");
  };

  return (
    <>
      <div className="scanlines"></div>
      <div className="terminal-container">
        <div className="terminal-box">
          <div className="terminal-header">
            <span>root@system: ~</span>
            <span>SECURE SHELL (SSH)</span>
          </div>

          <div className="terminal-content">
            <div 
              className="terminal-line"
              dangerouslySetInnerHTML={{ __html: text }} 
            />
            {showCursor && <span className="cursor"></span>}
          </div>

          {/* This button now acts as a 'Skip Animation' button */}
          <button 
            className="enter-btn" 
            onClick={handleManualEntry}
          >
            [ SKIP & ENTER ]
          </button>
        </div>
      </div>
    </>
  );
};

export default Welcome;