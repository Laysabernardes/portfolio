const create = (req, res) => {
    re.send(201);
};

const findAll = (req, res)=>{
    const projects = [];
    res.send(projects);
};

export default {create, findAll};