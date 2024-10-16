import React, { useState, useEffect } from "react";
import api from '../../../api';

import "./Projects.css";

function Projects() {
    const [projects, setProjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

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

    // Funções para mudar de página
    const nextPage = () => {
        if (currentPage < projects.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="projects-wrapper">
            <h1 className="title-section-project">Projetos.</h1>
            {projects.length > 0 ? (
                <div className="project-card">
                    {/* Renderizando apenas o projeto atual com base na página */}
                    <div className="project-container">
                        <div className="info-projects">
                            <p className="categoria-project">{projects[currentPage - 1].category}</p>
                            <h2 className="title-project">{projects[currentPage - 1].title}</h2>
                            <p className="tech-project">
                                {Array.isArray(projects[currentPage - 1].technologies) && projects[currentPage - 1].technologies.length > 0
                                    ? projects[currentPage - 1].technologies.map(tech => (
                                        <span className="tech-item-project" key={tech._id}>
                                            {tech.name}
                                        </span>
                                    ))
                                    : "Tecnologia não disponível"}
                            </p>
                            <div>
                                <p className="descricao-projects">{projects[currentPage - 1].description}</p>
                                <div className="links-project">
                                    <button>
                                        <a href={projects[currentPage - 1].demoURL} target="_blank" rel="noopener noreferrer">Ver Projeto</a>
                                    </button>
                                    <button>
                                        <a href={projects[currentPage - 1].repositoryURL} target="_blank" rel="noopener noreferrer">Ver Código</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="image-container-project">
                            <img src={projects[currentPage - 1].image} alt={projects[currentPage - 1].title} />
                        </div>
                    </div>
                </div>
            ) : (
                <p>Carregando projetos...</p>
            )}

            {/* Controles de paginação */}
            <div className="pagination-controls">
                <button onClick={prevPage} disabled={currentPage === 1}> Anterior</button>
                <span>{currentPage} de {projects.length}</span>
                <button onClick={nextPage} disabled={currentPage === projects.length}>Proxíma</button>
            </div>
        </div>
    );
}

export default Projects;