import Technologies from "../models/Technologies.js";

const createService = (body) => Technologies.create(body);
const findAllService = () => Technologies.find();
const findByName = (name) => {return Technologies.find({name: name})}
const findByCategory = (category) => {return Technologies.find({category: category})};
const deleteService = (name) => {return Technologies.findOneAndDelete({name: name})};
const updateService = (id, name, icon, nivel, category) => {
    return Technologies.findOneAndUpdate(
      { _id: id }, 
      { 
        name,          
        icon, 
        nivel, 
        category,
      }, 
      { new: true } // Retorna o documento atualizado
    );
  };

export default {
    createService,
    findAllService,
    findByName,
    findByCategory,
    deleteService,
    updateService
};