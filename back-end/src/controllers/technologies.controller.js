import {createService, findAllService, findByName, findByCategory, deleteService, updateService } from "../services/technologies.service.js"

export const createTechnology = async (req, res) => {
    try {
        const { name, icon, nivel, category } = req.body;

        if (!name || !icon || !nivel || !category) {
            return res.status(400).send({ message: "Preencha todos os campos para o registro." });
        }

        const technology = await createService(req.body);

        if (!technology) {
            return res.status(400).send({ message: "Erro ao criar a tec." });
        }

        res.status(201).send({
            message: "Tec criada com sucesso",
            technologies: {
                id: technology._id,
                name,
                icon,
                nivel,
                category,
            }
        });
    } catch (err) {
        return res.status(500).send({ message: err.message })
    }
};

export const findAllTechnology = async (req, res) => {
    try {
        const technologies = await findAllService();

        if (technologies.length === 0) {
            return res.status(400).send({ message: "Não há tecnologias registradas." });
        }
        res.send(technologies);
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};

export const findByNameTechnology = async (req, res) => {
    try {
        const { name } = req.params;
        const technologies = await findByName(name);
        if (!technologies || technologies.length === 0) {
            return res.status(404).send({ message: "Tecnologia não encontrada" });
        }
        return res.status(200).send(technologies);
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};

export const findByCategoryTechnology = async (req, res) => {
    try {
        const { category } = req.params;
        const technologies = await findByCategory(category);
        return res.send(technologies);
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};

export const updateTechnology = async (req, res) => {
    try {
        const { name, icon, nivel, category } = req.body;

        if (!name && !icon && !nivel && !category) {
            res.status(400).send({ message: "Envie pelo menos um campo para a atualização." });
        };

        const updatedTechnology = await updateService(
            req.params.id,
            name,
            icon,
            nivel,
            category,
        );

        if (!updatedTechnology) {
            return res.status(404).send({ message: "Tecnologia não encontrada para atualização.", updatedTechnology });
        };
        res.send({ message: "Tecnologias foi atualizado com sucesso!", updatedTechnology });
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};

export const deleteTechnology = async (req, res) => {
    const { name } = req.params;
    try {
        const deletedTechnology = await deleteService(name);
        if (!deletedTechnology) {
            return res.status(404).send({ message: "Tecnologia não encontrada." });
        }

        return res.send({ message: "Tecnologia deletada com sucesso" });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};