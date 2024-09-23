import React, { useState, useEffect } from "react";
import api from '../api';

import "../styles/Technologies.css";

function Technologies({ isDarkTheme }) {
    const [tecnologia, setTecnologia] = useState([]);
    const [categoria, setCategoria] = useState('');

    useEffect(() => {
        const fetchTechnologies = async () => {
            try {
                if (categoria) {
                    const response = await api.get(`/tec/categoria/${categoria}`);
                    console.log(`Resposta da API - Categoria ${categoria}`, response);

                    if (response.status === 200) {
                        const data = response.data || [];
                        console.log("Dados das tecnologias: ", data);

                        setTecnologia(data);
                    } else {
                        console.error("Erro na resposta da API: ", response.status);
                    }
                }
            } catch (error) {
                console.error("Erro ao buscar as Technologias: ", error);
            }
        };
        fetchTechnologies(); //chama a função sempre que a categoria mudar
    }, [categoria]); 

    const handleCategoriaClick = (novaCategoria) => {
        setCategoria(novaCategoria);
    };

    const handleResetClick = () => {
        setCategoria(''); // Reseta a categoria para voltar ao texto principal
        setTecnologia([]); // Limpa as tecnologias, se necessário
    };

    return (
        <div className="container-tech">
            <div className="browser-bar-tech">
                <div className="circle-tech "></div>
                <div className="circle-tech "></div>
                <div className="circle-tech "></div>
            </div>
            <div className="separator-line-tech"></div>

            <h1 className="titulo-section-tech">Hard Skills</h1>

            <div className="group-button">
                {categoria && (
                    <button className="btn-reset" onClick={handleResetClick}>Voltar</button>
                )}
                <button className="button-tech btn-outro" onClick={() => handleCategoriaClick('outros')}>Outros</button>
                <button className="button-tech btn-back" onClick={() => handleCategoriaClick('back-end')}>Back-end</button>
                <button className="button-tech btn-front" onClick={() => handleCategoriaClick('front-end')}>Front-end</button>
            </div>

            <div className="container-icon">
                {!categoria && (
                    <div>
                        <p className="texto-tech">
                            Essas são as linguagens, bibliotecas, frameworks e ferramentas com as quais tenho experiência,
                            juntamente com meu nível de proficiência em cada uma delas. Clique em uma categoria para
                            ver mais detalhes.
                        </p>
                        <h2>Tech.</h2>
                    </div>
                )}
                {categoria && tecnologia.length === 0 && (
                    <p className="texto-tech">Ops! No momento, ainda estou estudando, mas em breve terei mais Hard Skills para compartilhar aqui!</p>
                )}
                {categoria && tecnologia.length > 0 && (
                    tecnologia.map((tech) => (
                        <div className="tech-item" key={tech._id}>
                            <p className="tech-name">{tech.name}</p>
                            <img className="tech-img" src={tech.icon} alt={tech.name} />
                            <p className="tech-nivel">{tech.nivel}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default Technologies;