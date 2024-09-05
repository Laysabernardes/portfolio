import mongoose from "mongoose";

const TechnologiesSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        lowercase: true,
        require: true
    },
    icon: {
        type: String,
        require: true
    },
    nivel: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    }
});

const Technologies = mongoose.model("Technologies", TechnologiesSchema);

export default Technologies;
