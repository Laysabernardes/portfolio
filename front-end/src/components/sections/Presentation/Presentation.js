import React, { useEffect } from "react";
import AnimatedSection from '../../shared/AnimatedSection.jsx';
import "./Presentation.css";
import { fotoLight, fotoDark, linkedln, gmail, github, Curriculo } from "../../../assets/images.js";

function Presentation({ isDarkTheme }) {

    useEffect(() => {
        const highlights = document.querySelectorAll('.highlight');

        highlights.forEach((span, index) => {
            setTimeout(() => {
                span.classList.add('highlighted');
            }, index * 2000);
        });
    }, []);

    return (
        <div className="container">
            <div className="browser-bar">
                <div className="circle "></div>
                <div className="circle "></div>
                <div className="circle "></div>
            </div>
            <div className="separator-line"></div>
            <div className="info-profile-container">
                <section className="info">
                    <AnimatedSection>
                        <div className="titulo-presentation">
                            <h1>Olá, sou uma </h1>
                            <h1 className="destaque-titulo">Desenvolvedora</h1>
                            <h1>Full-stack.</h1>
                        </div>
                        <p className="text-presentation">
                            Estudante de Análise e Desenvolvimento de Sistemas no Instituto Federal de São Paulo.
                            <span className="highlight">Criativa</span>, <span className="highlight">organizada</span> e com uma <span className="highlight">mente analítica</span>,
                            adoro transformar ideias em realidade. Estou pronta para mergulhar em novos desafios e contribuir em projetos que façam a diferença.
                        </p>
                        <div className="links">
                            <ul>
                                <li className="rede-social">
                                    <a href="https://www.linkedin.com/in/laysabernardes/" target="_blank" rel="noopener noreferrer">
                                        <img src={linkedln} alt="LinkedIn" />
                                    </a>
                                </li>
                                <li className="rede-social">
                                    <a href="https://github.com/laysabernardes" target="_blank" rel="noopener noreferrer">
                                        <img src={github} alt="GitHub" />
                                    </a>
                                </li>
                                <li className="rede-social">
                                    <a
                                        href="https://mail.google.com/mail/?view=cm&fs=1&to=laysabernardes.ads@gmail.com&su=Contato%20via%20Portfólio&body=Olá%20Laysa!"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img src={gmail} alt="Gmail" />
                                    </a>
                                </li>
                                <li className="rede-social">
                                    <a href={Curriculo} download>
                                        <button className="botao">Baixar CV</button>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </AnimatedSection>
                </section>
                <section className="profile">
                    <figure>
                        <img
                            className="profile-image"
                            src={isDarkTheme ? fotoDark : fotoLight}
                            alt="Imagem de Laysa Bernardes"
                        />
                        <figcaption className="profile-name">Laysa.</figcaption>
                    </figure>
                </section>

            </div>
        </div>

    );
}

export default Presentation;