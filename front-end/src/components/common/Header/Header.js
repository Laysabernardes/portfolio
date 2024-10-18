import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { logoLight, logoDark } from "../../../assets/images.js";
import "./Header.css";

import ThemeToggleButton from "../../shared/ThemeToggleButton.js";

function Navbar({ onThemeChange }) {
    const [active, setActive] = useState("nav_menu");
    const [icon, setIcon] = useState("nav_toggler");
    const [isDarkTheme, setIsDarkTheme] = useState(false); // Estado para o tema

    const navigate = useNavigate();

    // Atualiza o estado do tema quando a função onThemeChange é chamada
    useEffect(() => {
        onThemeChange(isDarkTheme); // Notifica o pai sobre o tema atual
    }, [isDarkTheme, onThemeChange]);

    // Função para alternar entre os estados 'active' e 'icon' ao clicar no ícone do menu
    const navToggle = () => {
        setActive(active === "nav_menu" ? "nav_menu nav_active" : "nav_menu");
        setIcon(icon === "nav_toggler" ? "nav_toggler toggle" : "nav_toggler");
    };

    const handleThemeChange = (isDark) => {
        setIsDarkTheme(isDark);
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' }); // Rola suavemente até a seção
        }
    };

    return (
        <nav className="nav">
            <div className="header_container">
                {/* Troca dinâmica da logo com base no estado do tema */}
                <a href="https://www.linkedin.com/in/laysabernardes/">
                    <img
                        className="header_logo"
                        src={isDarkTheme ? logoDark : logoLight} // Troca de logo com base no tema
                        alt="Logo escrito LB de letra cursiva"
                    />
                </a>
                <p className="header_titulo">Laysa.</p>
            </div>

            <div className="nav_lista">
                <ul className={active}>
                    <li>
                        <a onClick={() => scrollToSection('presentation')} className="nav_link">
                            Home
                        </a>
                    </li>

                    <li>
                        <a onClick={() =>  scrollToSection('technologies')} className="nav_link">
                            Tech
                        </a>
                    </li>

                    <li>
                        <a onClick={() => scrollToSection('projects')} className="nav_link">
                            Projetos
                        </a>
                    </li>

                    <li>
                        <a onClick={() => scrollToSection('contact')} className="nav_link">
                            Contato
                        </a>
                    </li>

                    {/* Passar a função para o ThemeToggleButton para monitorar a troca de tema */}
                    <ThemeToggleButton onThemeChange={handleThemeChange} />
                </ul>
            </div>

            {/* Ícone do menu (hamburguer) para telas menores */}
            <div onClick={navToggle} className={icon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    )
}

export default Navbar;