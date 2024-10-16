import React, { useState } from 'react';
import Header from "../components/layout/Header.js";
import Presentation from "../components/sections/Presentation.js";
import Technologies from '../components/sections/Technologies.js';
import Projects from '../components/sections/Projects.js';
import About from '../components/sections/About.js';
import Footer from '../components/layout/Footer.js';


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
                <Technologies isDarkTheme={isDarkTheme} />
                <Projects isDarkTheme={isDarkTheme} />
                <About isDarkTheme={isDarkTheme} />
                <Footer isDarkTheme={isDarkTheme} />
            
        </div>
    );
};

export default Home;