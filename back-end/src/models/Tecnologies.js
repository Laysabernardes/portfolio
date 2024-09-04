import mongoose from "mongoose";

const TecnologiesSchema = new mongoose.Schema({
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

const Tecnologies = mongoose.model("Tecnologies", TecnologiesSchema);

export default Tecnologies;
