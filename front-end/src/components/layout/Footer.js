import React from 'react';

import { avatarFooter } from "../../assets/images.js";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">

                <div className="footer-nome">
                    <p className='footer-titulo'>Laysa.</p>
                    <p className='footer-despedida'>Obrigada por visitar meu portfólio! Fico feliz em tê-lo aqui!</p>
                </div>

                <div className="footer-contato">
                    <h3>Contato</h3>
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </li>
                        <li>
                            <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </li>
                        <li>
                            <a href="laysabernardes.ads@gmail.com">
                                Gmail
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footer-img">
                    <img src={avatarFooter} alt="Imagem de Laysa" />
                </div>
            </div>

            <hr />
            <p className='footer-copy'>&copy; 2024 Laysa Bernardes. Todos os direitos reservados.</p>
        </footer>
    );
};

export default Footer;
