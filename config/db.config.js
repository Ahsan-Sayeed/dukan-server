const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.48fmuml.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{
    console.log('database connected successfully');
})
.catch((err)=>{
    console.log(err);
});