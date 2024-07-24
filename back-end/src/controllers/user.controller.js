import userService from "../services/user.service.js";
    
const create = async (req, res) => {
    try {
        const { name, email, password} = req.body;

        if (!name || !email || !password) {
            res.status(400).send({ message: "Preencha todos os campos para o registro." });
        }

        const user = await userService.createService(req.body);

        if (!user) {
            return res.status(400).send({ message: "Erro ao criar o usuário." });
        }

        res.status(201).send({
            message: "Usuário criado com sucesso",
            user: {
                
                id: user._id,
                name,
                email,
            }
        });
    } catch (err) {
        res.status(500).send({ message: err.mensage })
    }
}

const findAll = async (req, res) => {
    try {
        const users = await userService.findAllService();

        if (users.length === 0) {
            return res.status(400).send({ message: "Não há usuários registrados." });
        }
        res.send(users);
    } catch (err) {
        res.status(500).send({ message: err.mensage })
    }
};

const findById = async (req, res) => {

    try {
        const user = req.user
        res.send(user);
    } catch (err) {
        res.status(500).send({ message: err.mensage })
    }
}

const update = async (req, res) => {
    try {
        const { name, email, password} = req.body;

        if (!name && !email && !password) {
            res.status(400).send({ message: "Envie pelo menos um campo para a atualização." });
        };

        const { id, user } = req;

        await userService.updateService(
            id,
            name,
            email,
            password,
        );

        res.send({ message: "Usuario foi atualizado com sucesso!" });
    } catch (err) {
        res.status(500).send({ message: err.mensage })
    }
};

export default { create, findAll, findById, update };