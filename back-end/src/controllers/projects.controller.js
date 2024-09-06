import { title } from "process";
import Projects from "../models/Projects.js";
import {createService, findAllService, findByCategory, deleteService, updateService} from "../services/projects.service.js";

export const create = async (req, res) => {
    try {
        const { title, description, technologies, repositoryURL, demoURL, value,image,category} = req.body;

        if ( !title || !description || !technologies || !repositoryURL || !demoURL || !value || !image|| !category) {
            res.status(400).send({
                message: "Adicione todos os elementos!"
            });
        }

        const project = await createService({
            title, 
            description, 
            technologies, 
            repositoryURL, 
            demoURL, 
            value,
            image,
            category,
        });

        if (!project) {
            return res.status(400).send({ message: "Erro ao criar o projeto." });
        }

        // Popula as tecnologias associadas e retorna o projeto com as tecnologias completas
        const populatedProject = await Projects.findById(project._id).populate('technologies').exec();
        
        // Retorna o projeto recém-criado como resposta
        res.status(201).send({
            message: "Projeto criado com sucesso!",
            project: populatedProject
        });

    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

export const findAll = async (req, res) => {
    try {

        const projects = await findAllService();

        if (projects.length === 0) {
            return res.status(400).send({ message: "Não há projetos registrados." });
        }
        res.send(projects);
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};

export const Category = async (req, res) => {
    try {
        const {category} = req.params;
        const projects = await findByCategory(category);
        if (!projects || projects.length === 0) {
            return res.status(404).send({ message: "Projeto não encontrado" });
        }
        return res.status(200).send(projects);
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};

export const updateProjects = async (req, res) => {
    try {
        const { title, description, technologies, repositoryURL, demoURL, value, image, category} = req.body;

        if (!title && !description && !technologies && !repositoryURL && !demoURL && !value && !image && !category) {
            res.status(400).send({ message: "Envie pelo menos um campo para a atualização." });
        };

        const updatedProjects = await updateService(
            req.params.id,
            title, 
            description, 
            technologies, 
            repositoryURL, 
            demoURL, 
            value, 
            image, 
            category,
        );

        if (!updatedProjects) {
            return res.status(404).send({ message: "Projeto não encontrada para atualização.", updatedProjects });
        };
        res.send({ message: "Projeto foi atualizado com sucesso!", updatedProjects });
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};