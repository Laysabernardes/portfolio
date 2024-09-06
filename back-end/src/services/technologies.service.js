import Technologies from "../models/Technologies.js";

export const createService = (body) => Technologies.create(body);
export const findAllService = () => Technologies.find();
export const findByName = (name) => { return Technologies.find({ name: name }) }
export const findByCategory = (category) => { return Technologies.find({ category: category }) };
export const deleteService = (name) => { return Technologies.findOneAndDelete({ name: name }) };
export const updateService = (id, name, icon, nivel, category) => {
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