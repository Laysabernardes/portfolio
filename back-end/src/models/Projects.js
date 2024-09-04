import mongoose from "mongoose";

const ProjectsSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    tecnologies:{
        type: String,
        require: true
    },
    repositoryURL:{
        type: String,
        require: true
    },
    demoURL:{
        type: String,
        require: true
    },
    value:{
        type: String,
        require: true
    },
    image:{
        type: String,
        require: true
    },
    category:{
        type: String,
        require: true
    },
    user:{
        tyoe:mongoose.Schema.Types.ObjectId,
        ref: "User",
        require:true
    },
});

const Projects = mongoose.model("Projects", ProjectsSchema);

export default Projects;
