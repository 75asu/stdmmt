const mongoose = require('mongoose');
// using the schema class from the mongoose namespace
const Schema = mongoose.Schema;

// creating the schema of the book
// this schema will be exported to mongodb 
// mongodb will create a schema of this provided name
const studentSchema = new Schema( {
    // name is the object and it has its own properties
    name: {
        type: String,
        required: true
    },
    batch: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    hons: {
        type: String,
        required: true
    },
    hosteller: {
        type: Boolean,
        required: true
    },
    image: {
        type: String,
        required: true
    } 
});

// adding the schema to the database
// Student is the model name
// mongodb by default will store as "books"
module.exports = mongoose.model("Student", studentSchema)