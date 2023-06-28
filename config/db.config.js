const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://dukan:2LJzIKg8XFisnKf5@cluster0.plkdc5k.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log('database connected successfully');
})
.catch((err)=>{
    console.log(err);
});