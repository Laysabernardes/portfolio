const create = async (req, res) => {
    try {
        const { wallpaper, title, movie, description, tech, linkgithub, linkdeploy, value} = req.body;

        if (!wallpaper || !title || !movie || !description || !tech || !linkgithub || !linkdeploy || !value) {
            res.status(400).send({
                message: "Adicione todos os elementos!"
            });
        }

        const project = await createService({
            wallpaper, 
            title, 
            movie, 
            description, 
            tech, 
            linkgithub, 
            linkdeploy, 
            value,
            user: req.userId,
        });

        if (!project) {
            return res.status(400).send({ message: "Erro ao criar o projeto." });
        }

        res.status(201).send();

    } catch (err) {
        res.status(500).send({ message: err.mensage })
    }
}

const findAll = async (req, res) => {
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

    export default { create, findAll };