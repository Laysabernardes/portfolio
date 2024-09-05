import Projects from "../models/Projects.js";

export const createService = (body) => Projects.create(body);
export const findAllService = () => Projects.find();
export const findByCategory = (category) => {return Projects.find({category: category})};
export const deleteService = (id) => {return Projects.findOneAndDelete({_id: id})};
export const updateService = (id, title, description, technologies, repositoryURL, demoURL, value,image,category) => {
    return Projects.findOneAndUpdate(
      { _id: id }, 
      {           
        title, 
        description, 
        technologies, 
        repositoryURL, 
        demoURL, 
        value,
        image,
        category
      }
    );
  };
