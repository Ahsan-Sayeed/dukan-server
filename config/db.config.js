const mongoose = require('mongoose');
// const oldDb = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.48fmuml.mongodb.net/?retryWrites=true&w=majority`;
const newDb = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.plkdc5k.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(newDb)
.then(()=>{
    console.log('database connected successfully');
})
.catch((err)=>{
    console.log(err);
});