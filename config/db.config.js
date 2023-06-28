const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://dukan:eiDMBW66SZsHZRSD@cluster0.48fmuml.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log('database connected successfully');
})
.catch((err)=>{
    console.log(err);
});