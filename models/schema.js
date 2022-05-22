const mongoose = require('mongoose');

const Schema = mongoose.Schema; 

const dogSchema = new Schema(
    {
        id: Number, required: true,
        name: String, required: true,
        gender: String, required: true,
        breed: String, required: true,
        age: String, required: true,
        location: String, required: true,
        img: String, required: true,
    },
    {timestamps: true}
);

const Dog = mongoose.model("Dog", dogSchema);

module.exports = Dog;