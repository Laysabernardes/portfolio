import Projects from "../models/Projects.js";
import {createService, findAllService, findByName, findByCategory, deleteService, updateService} from "../services/projects.service.js";

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

        const projects = await userService.findAllService();

        if (projects.length === 0) {
            return res.status(400).send({ message: "Não há usuários registrados." });
        }
        // Envia a lista de usuários como resposta.
        res.send(users);
    } catch (err) {
        res.status(500).send({ message: err.mensage })
    }
};
