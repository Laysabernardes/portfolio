import Projects from "../models/Projects.js";

const createService = (body) => Projects.create(body);
const findAllService = () => Projects.find();
const findByIdService = (id) => Projects.findById(id);
const updateService = (wallpaper, title, movie, description, tech, linkgithub, linkdeploy, value) => {
    return Projects.findOneAndUpdate(
      { _id: id }, 
      {           
        wallpaper, 
        title, 
        movie, 
        description, 
        tech, 
        linkgithub, 
        linkdeploy, 
        value,
      }
    );
  };

export default {
    createService,
    findAllService,
    findByIdService,
    updateService
};