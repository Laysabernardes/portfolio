import User from "../models/User.js";

export const createService = (body) => User.create(body);
export const findAllService = () => User.find();
export const updateService = (id, username, email, password) => {
  return User.findOneAndUpdate(
    { _id: id },
    {
      username,
      email,
      password,
    }
  );
};