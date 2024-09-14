import mongoose from"mongoose";

import dotenv from "dotenv";
import jwt, { decode } from "jsonwebtoken";
import User from "../services/user.services.js";

const userServices = new User();
dotenv.config(); 

export const validId = (req, res, next) => {
    try {
        const id = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ message: "ID inválido" });
        }
        next();
    } catch (err) {
        res.status(500).send({ message: err.mensage })
    }
};

export const authMiddleware = (req, res, next) => {
    try{

        const {authorization} = req.headers;
        
        if(!authorization){
            return res.send(401);
        }
        
        const parts = authorization.split(" ");
        const [schema, token] = parts;

        if(schema !== "Bearer"){
            return res.send(401);
        }

        if(parts.length !== 2){
            return res.send(401);
        }

        jwt.verify(token, process.env.SECRET_JWT, async (err, decoded) => {
            if(err){
                return res.status(401).send({message:"Token invalid."});
            }
    
            const user = await userServices.findById(decoded.id); 
            
            if(!user || !user.id){
                return res.status(401).send({message:"Token invalid."});
            }
            
            req.userId = decoded.id;
            return next();
        });
    } catch (err){
        res.status(500).send({message:e.message});
    }
}