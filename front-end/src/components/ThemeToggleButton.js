import React, { useState, useEffect } from 'react';
import '../styles/ThemeToggleButton.css';
import { sun, moon } from "../assets/images.js";

function ThemeToggleButton({ onThemeChange }) {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDarkTheme(savedTheme === 'dark');
            document.body.classList.toggle('dark-theme', savedTheme === 'dark');
            onThemeChange(savedTheme === 'dark'); // Envia o estado do tema ao Navbar
        }
    }, [onThemeChange]);

    const toggleTheme = () => {
        const newTheme = !isDarkTheme ? 'dark' : 'light';
        setIsDarkTheme(!isDarkTheme);
        document.body.classList.toggle('dark-theme', newTheme === 'dark');
        localStorage.setItem('theme', newTheme);
        onThemeChange(newTheme === 'dark'); // Atualiza o estado do tema no Navbar
    };

    return (
        <div className="theme-toggle">
            <input
                type="checkbox"
                id="darkmode-toggle"
                checked={isDarkTheme}
                onChange={toggleTheme} 
            />
            <label htmlFor="darkmode-toggle">
                <img src={sun} alt="Sun icon" className="sun" />
                <img src={moon} alt="Moon icon" className="moon" />
            </label>
            <div className="background"></div>
        </div>
    );
}

export default ThemeToggleButton;
