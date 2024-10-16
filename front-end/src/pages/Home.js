import React, { useState } from 'react';
import Header from "../components/common/Header/Header.js";
import Presentation from "../components/sections/Presentation/Presentation.js";
import Technologies from '../components/sections/Technologies/Technologies.js';
import Projects from '../components/sections/Projects/Projects.js';
import About from '../components/sections/About/About.js';
import Footer from '../components/common/Footer/Footer.js';


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