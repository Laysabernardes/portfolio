import User from "../models/User.js";

const createService = (body) => User.create(body);
const findAllService = () => User.find();
const updateService = (id, username, email, password) => {
    return User.findOneAndUpdate(
      { _id: id }, 
      {           
        username,
        email,
        password,
      }
    );
  };

export default {
    createService,
    findAllService,
    updateService
};