const mongoose = require('mongoose');

const Schema = mongoose.Schema; 

const dogSchema = new Schema(
    {
        id: Number, required,
        name: String, required,
        gender: String, required,
        breed: String, required,
        age: String,
        location: String, required,
        img: String
    },
    {timestamps: true}
);

const Dog = mongoose.model("Dog", dogSchema);

module.exports = Dog;