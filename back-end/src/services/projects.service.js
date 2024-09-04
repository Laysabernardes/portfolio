import Projects from "../models/Projects.js";

const createService = (body) => Projects.create(body);
const findAllService = () => Projects.find();
const findByIdService = (id) => Projects.findById(id);
const updateService = (title, description, tecnologies, repositoryURL, demoURL, value,image,category) => {
    return Projects.findOneAndUpdate(
      { _id: id }, 
      {           
        title, 
        description, 
        tecnologies, 
        repositoryURL, 
        demoURL, 
        value,
        image,
        category
      }
    );
  };

export default {
    createService,
    findAllService,
    findByIdService,
    updateService
};