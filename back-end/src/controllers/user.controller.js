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
        const { username, email, password } = req.body;

        // Verifica se pelo menos um campo foi enviado para atualização
        if (!username && !email && !password) {
            return res.status(400).send({ message: "Envie pelo menos um campo para a atualização." });
        }

        // Obtém o id dos parâmetros da URL
        const { id } = req.params;

        // Cria um objeto com apenas os campos que foram enviados no body
        const dataToUpdate = {};
        if (username) dataToUpdate.username = username;
        if (email) dataToUpdate.email = email;
        if (password) dataToUpdate.password = password;

        // Chamando o serviço para atualizar o usuário
        const updatedUser = await updateService(id, dataToUpdate);

        if (!updatedUser) {
            return res.status(404).send({ message: "Usuário não encontrado" });
        }

        res.send({ message: "Usuário foi atualizado com sucesso!", user: updatedUser });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};
