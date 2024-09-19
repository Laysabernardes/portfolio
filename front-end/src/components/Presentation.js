import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ThemeToggleButton from "./ThemeToggleButton.js";

function presentation() {

    return (
        <div className="container">

            <section className="info">
                <h1>Olá, sou uma <strong>Desenvolvedora</strong> Full-stack</h1>
                <p>
                    Estudante de Análise e Desenvolvimento de Sistemas no Instituto Federal de São Paulo. Criativa,
                    organizada e com uma mente analítica, adoro transformar ideias em realidade. Estou pronta para mergulhar
                    em novos desafios e contribuir em projetos que façam a diferença.
                </p>

                <div className="links">
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/laysabernardes/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </li>
                        <li>
                            <a href="https://github.com/laysabernardes" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </li>
                        <li>
                            <a href="mailto:seuemail@gmail.com">Gmail</a>
                        </li>
                        <li>
                            <button onClick={() => window.location.href = 'link-para-o-cv.pdf'}>Baixar CV</button>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="profile">
                <figure>
                    <img alt="Imagem de Laysa Bernardes" className="profile-image" />
                    <figcaption className="profile-name">Laysa Bernardes</figcaption>
                </figure>
            </section>
        </div>
    );
}

export default presentation