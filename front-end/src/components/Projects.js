import React, { useState, useEffect } from "react";
import api from '../api';

import "../styles/Projects.css";

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await api.get('/proj');
                console.log("Resposta da API - Projetos", response);

                if (response.status === 200) {
                    const data = response.data || [];
                    console.log("Dados dos projetos: ", data);
                    setProjects(data); 
                } else {
                    console.error("Erro na resposta da API: ", response.status);
                }
            } catch (error) {
                console.error("Erro ao buscar os Projetos: ", error);
            }
        };
        fetchProjects();
    }, []);

    return (
        <div>
        {/* Mapeia os projetos do estado e exibe as informações */}
        {projects.map((project) => (
            <div key={project.id}>
                <div className="info-projects">
                    <p>{project.category}</p>
                    <h2>{project.title}</h2>
                    <p>{project.technologies}</p>
                </div>

                <div className="descricao-projects">
                    <p>{project.description}</p>
                    <button>
                        <a href={project.demoURL} target="_blank" rel="noopener noreferrer">Ver Projeto</a>
                    </button>
                    <button>
                        <a href={project.repositoryURL} target="_blank" rel="noopener noreferrer">Ver Código</a>
                    </button>
                </div>

                <div>
                    <img src={project.image} alt={project.title} />
                </div>
            </div>
        ))}
    </div>
    );
}

export default Projects;