import express from "express"; 
import connectDatabase from "./src/database/db.js";
import dotenv from "dotenv";

import userRoute from "./src/routes/user.route.js";
import authRoute from "./src/routes/auth.route.js";
import projectRoute from "./src/routes/news.route.js"


const app = express();

const userRoute = require("");
const port = 3000; 

app.get("/", (req,res) =>{
    res.send("hello world");
})

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));