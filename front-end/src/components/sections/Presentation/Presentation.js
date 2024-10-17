import React, { useEffect } from "react";
import "./Presentation.css";
import { fotoLight, fotoDark, linkedln, gmail, github } from "../../../assets/images.js";

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
                    <div className="titulo-presentation">
                        <h1>Olá, sou uma </h1>
                        <h1 className="destaque-titulo">Desenvolvedora</h1>
                        <h1>Full-stack.</h1>
                    </div>
                    <p className="text-presentation">
                        Estudante de <span className="highlight">Análise e Desenvolvimento de Sistemas</span> no Instituto Federal de São Paulo.
                        <span className="highlight">Criativa</span>, <span className="highlight">organizada</span> e com uma <span className="highlight">mente analítica</span>,
                        adoro transformar <span className="highlight">ideias em realidade</span>. Estou pronta para mergulhar em novos desafios e contribuir em projetos <span className="highlight">que façam a diferença</span>.
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
                                <a href="laysabernardes.ads@gmail.com">
                                    <img src={gmail} alt="Gmail" />
                                </a>
                            </li>
                            <li className="rede-social">
                                <button className="botao" onClick={() => window.location.href = 'link-para-o-cv.pdf'}>Baixar CV</button>
                            </li>
                        </ul>
                    </div>
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