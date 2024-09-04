import Tecnologies from "../models/Tecnologies.js";

const createService = (body) => Tecnologies.create(body);
const findAllService = () => Tecnologies.find();
const updateService = (name, icon, nivel, category) => {
    return Tecnologies.findOneAndUpdate(
      { _id: id }, 
      {           
        name, 
        icon, 
        nivel, 
        category,
      }
    );
  };

export default {
    createService,
    findAllService,
    updateService
};