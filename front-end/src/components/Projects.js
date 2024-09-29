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
        <div className="project-card">
            {projects.map((project) => (
                <div key={project.id} className="project-container">
                    <div className="info-projects">
                        <p className="categoria-project">{project.category}</p>
                        <h2 className="title-project">{project.title}</h2>
                        <p className="tech-project">
                            {Array.isArray(project.technologies) && project.technologies.length > 0
                                ? project.technologies.map(tech => (
                                    <span className="tech-item-project" key={tech._id}>
                                        {tech.name}
                                    </span>
                                ))
                                : "Tecnologia não disponível"}
                        </p>
                        <div>
                            <p className="descricao-projects">{project.description}</p>
                            <div className="links-project">
                                <button>
                                    <a href={project.demoURL} target="_blank" rel="noopener noreferrer">Ver Projeto</a>
                                </button>
                                <button>
                                    <a href={project.repositoryURL} target="_blank" rel="noopener noreferrer">Ver Código</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="image-container-project">
                        <img src={project.image} alt={project.title} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Projects;