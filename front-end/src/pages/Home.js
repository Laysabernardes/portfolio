import React, { useState, useEffect } from 'react';
import Header from "../components/common/Header/Header.js";
import Presentation from "../components/sections/Presentation/Presentation.js";
import Technologies from '../components/sections/Technologies/Technologies.js';
import Projects from '../components/sections/Projects/Projects.js';
import About from '../components/sections/About/About.js';
import Footer from '../components/common/Footer/Footer.js';

import Loader from '../components/shared/Loader/Loader.js';
import Welcome from '../components/sections/Welcome/Welcome.js';

const Home = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isWelcomeVisible, setIsWelcomeVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000); // 2 segundos de espera
        return () => clearTimeout(timer); 
    }, []);

    // Função para alternar o tema
    const handleThemeChange = (isDark) => {
        setIsDarkTheme(isDark);
    };

    const handleEnter = () => {
        setIsWelcomeVisible(false);
    };

    // Renderiza o Loader enquanto a página está carregando
    if (isLoading) return <Loader />;

    return (
        <div>
            {isWelcomeVisible ? (
                <Welcome onEnter={handleEnter} />
            ) : (
                <>
                    <Header onThemeChange={handleThemeChange} />
                    <Presentation isDarkTheme={isDarkTheme} />
                    <Technologies isDarkTheme={isDarkTheme} />
                    <Projects isDarkTheme={isDarkTheme} />
                    <About isDarkTheme={isDarkTheme} />
                    <Footer isDarkTheme={isDarkTheme} />
                </>
            )}
        </div>
    );
};

export default Home;