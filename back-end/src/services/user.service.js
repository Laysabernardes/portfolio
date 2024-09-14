import User from "../models/User.js";

export const createService = (body) => User.create(body);
export const findAllService = () => User.find();
export const findByIdService = (id) => User.findById(id);
export const updateService = (id, dataToUpdate) => {
  return User.findOneAndUpdate(
    { _id: id },
    { $set: dataToUpdate }, // Apenas os campos presentes em `dataToUpdate` serão atualizados
    { new: true } // Retorna o documento atualizado
  );
};