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
                    <p className='texto-about'>
                        Sou uma profissional <span className='highlight'>organizada</span> e <span className='highlight'>dedicada</span>, sempre em
                        busca de <span className='highlight'>excelência</span>. Com um perfil <span className='highlight'>analítico</span>, mantenho
                        minhas tarefas sob controle para garantir <span className='highlight'>produtividade</span>. Nos meus momentos de lazer, gosto
                        de atividades criativas como pintura e crochê, que me ajudam a relaxar e explorar
                        novas ideias. Estou sempre aberta a <span className='highlight'>aprender</span> e a aplicar
                        minha <span className='highlight'>criatividade</span> em projetos desafiadores, contribuindo
                        para <span className='highlight'>soluções inovadoras</span>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;