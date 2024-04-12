

// const { name } = require('ejs');
const mongoose = require('mongoose');

const carsSchema = new mongoose.Schema({
    name :{
        type : String,
        required : 'This field is Required'
    },
    description :{
        type : String,
        required : 'This field is Required'
    },
    email :{
        type : String,
        required : 'This field is Required'
    },
    functionality :{
        type : Array,
        required : 'This field is Required'
    },
    category :{
        type : String,
        enum : ['Audi','Mercedes','Rolls_Royce','Bugatti','Ferrari','BMW','Lamborghini',],
        required : 'This field is Required' 
    },
    image :{
        type : String,
        required : 'This field is Required'
    }
},{timestamps:true})

carsSchema.index({'name' : 'text','description' : 'text'})
module.exports = mongoose.model('Cars',carsSchema)