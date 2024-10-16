import React from 'react';

import '../styles/About.css';
import { AvatarAbout } from '../assets/images.js';

const About = () => {
    return (
        <div className='section-about'>
            <div className='container-about'>
                <div className='about-img'>
                    <img className='avatar-about' src={AvatarAbout} alt='Avatar de Laysa Bernardes' />
                </div>
                <div>
                    <h1 className='titulo-about'>Sobre Mim.</h1>
                    <p>
                        Estou sempre em busca de aprender algo novo, seja por meio de bootcamps, cursos ou projetos práticos. Atualmente, estou envolvida em uma iniciação científica sobre <strong>como a Inteligência Artificial Generativa pode transformar o ensino de programação</strong>, explorando conceitos de Python e programação em dupla.
                    </p>
                    <br></br>
                    <p>
                        Gosto de organizar minhas tarefas, encarar desafios com curiosidade e buscar soluções criativas. Acredito que colaborar é a melhor forma de crescer — tanto como pessoa quanto profissional. Programar, para mim, é uma mistura de lógica e arte, e cada linha de código é uma chance de descobrir algo novo.
                    </p>
                    <br></br>
                    <p>
                        Seja criando projetos ou participando de pesquisas, estou sempre pronta para contribuir e evoluir.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;