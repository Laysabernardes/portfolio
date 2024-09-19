import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {logoLight, logoDark } from "../assets/images.js";
import "../styles/header.css";

import ThemeToggleButton from "./ThemeToggleButton.js";

function Navbar() {
    const [active, setActive] = useState("nav_menu");
    const [icon, setIcon] = useState("nav_toggler");
    const [isDarkTheme, setIsDarkTheme] = useState(false); // Estado para o tema

    const navigate = useNavigate();

    // Função para alternar entre os estados 'active' e 'icon' ao clicar no ícone do menu
    const navToggle = () => {
        // Altera a classe 'active' com base no estado atual
        if (active === "nav_menu") {
            setActive("nav_menu nav_active");
        } else {
            setActive("nav_menu");
        }

        // Altera a classe 'icon' com base no estado atual
        if (icon === "nav_toggler") {
            setIcon("nav_toggler toggle");
        } else {
            setIcon("nav_toggler");
        }
    };

    // Função para atualizar o tema ao receber a troca do ThemeToggleButton
    const handleThemeChange = (isDark) => {
        setIsDarkTheme(isDark);
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
                        <a className="nav_link" onClick={(e) => {
                            navigate("/main");
                        }}>Home</a>
                    </li>

                    <li>
                        <a className="nav_link" onClick={(e) => {
                            navigate("/sobre");
                        }}>Sobre</a>
                    </li>

                    <li>
                        <a className="nav_link" onClick={(e) => {
                            navigate("/projeto");
                        }}>Projetos</a>
                    </li>

                    <li>
                        <a className="nav_link" onClick={(e) => {
                            navigate("/contato")
                        }}>Contato</a>
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