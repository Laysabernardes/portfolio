import mongoose from "mongoose";

const ProjectsSchema = new mongoose.Schema({
    title:{
        type: String,
        unique: true,
        lowercase: true,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    // Campo technologies como um array de ObjectId
    technologies:[{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Technologies',
        require: true
    }],
    repositoryURL:{
        type: String,
        require: true
    },
    demoURL:{
        type: String,
        require: true
    },
    value:{
        type: Number,
        require: true
    },
    image:{
        type: String,
        require: true
    },
    category:{
        type: String,
        lowercase: true,
        require: true
    }
});

const Projects = mongoose.model("Projects", ProjectsSchema);

export default Projects;
