import React, { useState, useEffect } from 'react';
import '../styles/ThemeToggleButton.css';
import {sun, moon} from "../assets/images.js";

function ThemeToggleButton() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDarkTheme(savedTheme === 'dark');
            document.body.classList.toggle('dark-theme', savedTheme === 'dark');
        }
    }, []);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        const newTheme = !isDarkTheme ? 'dark' : 'light';
        document.body.classList.toggle('dark-theme', newTheme === 'dark');
        localStorage.setItem('theme', newTheme);
    };

    return (
        <div className="theme-toggle">
            <input type="checkbox" id="darkmode-toggle" />
            <label htmlFor="darkmode-toggle">
                <img src={sun} alt= "Sun icon" className="sun"/>
                <img src={moon} alt="Moon Icon" className="moon" />
            </label>
            <div className="background"></div>
        </div>
    );
}

export default ThemeToggleButton;