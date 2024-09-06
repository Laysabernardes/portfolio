import {createService, findAllService, updateService} from "../services/user.service.js"

export const createUser = async (req, res) => {
    try {
        const { username, email, password} = req.body;

        if (!username || !email || !password) {
            return res.status(400).send({ message: "Preencha todos os campos para o registro." });
        }

        const user = await createService(req.body);

        if (!user) {
            return res.status(400).send({ message: "Erro ao criar o usuário." });
        }

        res.status(201).send({
            message: "Usuário criado com sucesso",
            user: {
                
                id: user._id,
                username,
                email,
            }
        });
    } catch (err) {
        return res.status(500).send({ message: err.message })
    }
};

export const findAllUser = async (req, res) => {
    try {
        const users = await findAllService();

        if (users.length === 0) {
            return res.status(400).send({ message: "Não há usuários registrados." });
        }
        res.send(users);
    } catch (err) {
        res.status(500).send({ message: err.mensage })
    }
};

export const updateUser = async (req, res) => {
    try {
        const { username, email, password} = req.body;

        if (!username && !email && !password) {
            res.status(400).send({ message: "Envie pelo menos um campo para a atualização." });
        };

        const { id, user } = req;

        await updateService(
            id,
            username,
            email,
            password,
        );

        res.send({ message: "Usuario foi atualizado com sucesso!" });
    } catch (err) {
        res.status(500).send({ message: err.mensage })
    }
};