import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Welcome.css'; // Importing the CSS file

const Welcome = () => {
    const navigate = useNavigate();
    const [text, setText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const [isBooted, setIsBooted] = useState(false);

    const fullText = "INITIALIZING SYSTEM... USER: anonymous DETECTED.";

    // Auto Redirect
    useEffect(() => {
        if (isBooted) {
            const timer = setTimeout(() => {
                navigate('/Home');
            }, 3000); // Redirects 3 seconds after boot finishes
            return () => clearTimeout(timer);
        }
    }, [isBooted, navigate]);
    // Typing Effect
    useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < fullText.length) {
                setText(fullText.slice(0, i + 1));
                i++;
            } else {
                clearInterval(typingInterval);
                setIsBooted(true);
            }
        }, 50); // Typing speed

        return () => clearInterval(typingInterval);
    }, []);

    // Cursor Blinking Effect
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
    }, []);

    const handleEnter = () => {
        navigate('/Home');
    };

    return (
        <div className="terminal-wrapper">
            <div className="terminal-container">

                {/* Header Bar */}
                <div className="terminal-header">
                    <div className="header-buttons">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                    <div className="header-title">ROOT ACCESS // kharajch</div>
                </div>

                {/* Terminal Body */}
                <div className="terminal-body">
                    {/* Typing Line */}
                    <div className="terminal-line">
                        <span className="prompt">root@kharajch:~$</span>
                        <span className="typed-text">{text}</span>
                        <span className={`cursor ${showCursor ? 'visible' : 'hidden'}`}></span>
                    </div>

                    {/* System Checks (appears after typing) */}
                    <div className={`system-status ${isBooted ? 'fade-in' : ''}`}>
                        <div className="status-row">
                            <span className="status-bracket">[ OK ]</span> Loading interface modules...
                        </div>
                        <div className="status-row">
                            <span className="status-bracket">[ OK ]</span> Connecting to portfolio server...
                        </div>
                        <div className="status-row">
                            <span className="status-bracket">[ OK ]</span> Identity verified.
                        </div>
                    </div>

                    {/* Main Title */}
                    <div className={`hero-section ${isBooted ? 'slide-up' : ''}`}>
                        <h1 className="glitch-text" data-text="KHARAJCH">KHARAJCH</h1>
                        <p className="subtitle">FULL STACK DEVELOPER ENVIRONMENT</p>
                    </div>

                    {/* Button */}
                    <div className={`action-area ${isBooted ? 'fade-in-delayed' : ''}`}>
                        <button className="enter-btn" onClick={handleEnter}>
                            ENTER_SYSTEM <span className="arrow">→</span>
                        </button>
                    </div>
                </div>

                {/* CRT Overlay Effect */}
                <div className="scanlines"></div>
            </div>
        </div>
    );
};

export default Welcome;