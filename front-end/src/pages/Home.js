import React, { useState } from 'react';
import Header from "../components/Header.js";
import Presentation from "../components/Presentation.js";
import Technologies from '../components/Technologies.js';

const Home = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    // Função para alternar o tema
    const handleThemeChange = (isDark) => {
        setIsDarkTheme(isDark);
    };

    return (
        <div>
            <Header onThemeChange={handleThemeChange} />
            <Presentation isDarkTheme={isDarkTheme} />
            <Technologies isDarkTheme={isDarkTheme}/>
        </div>
    );
};

export default Home;