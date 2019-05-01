const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const chihuahuaSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: "https://via.placeholder.com/200"
    }
});

const Chihuahua = mongoose.model("Chihuahua", chihuahuaSchema);

module.exports = Chihuahua;