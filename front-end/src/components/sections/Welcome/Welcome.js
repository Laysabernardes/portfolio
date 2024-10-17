import React from 'react';
import './Welcome.css';
import { avatarSaudacao } from '../../../assets/images.js';

const Welcome = ({ onEnter }) => {

    return (
        <div class="parent-container">
            <div className='welcome-container'>
                <div className="welcome-text">
                    <h1>Bem-Vindo ao meu</h1>
                    <h2>Portfólio &hearts;</h2>
                    <p>Vamos lá?</p>
                    <button className="welcome-button" onClick={onEnter}>ENTRAR</button>
                </div>
                <img src={avatarSaudacao} alt="Imagem de Laysa" className="avatar" />
            </div>
        </div>
    );
};

export default Welcome;