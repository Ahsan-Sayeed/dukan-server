const mongoose = require('mongoose');

// mongoose.connect("mongodb+srv://dukan:eiDMBW66SZsHZRSD@cluster0.48fmuml.mongodb.net/?retryWrites=true&w=majority")
mongoose.connect("mongodb+srv://mominfood23:8AIETNL3JjX6Hmo0@cluster0.ewafbmt.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log('database connected successfully');
})
.catch((err)=>{
    console.log(err);
});