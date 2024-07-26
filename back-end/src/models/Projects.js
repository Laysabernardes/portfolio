import mongoose from "mongoose";

const ProjectsSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    image:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    linkGitHub:{
        type: String,
        require: true
    },
    linkDeploy:{
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
