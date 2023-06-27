const TodoTable = require('../model/data.model');

exports.getData = async(req,res) =>{
  try{
    const TodoFile = await TodoTable.find();
    res.status(200).send(TodoFile);
  }
  catch(err){
    console.log(err)
  }
}

exports.postData = async (req,res)=>{
    try{
        const TodoFile = new TodoTable({
            title: req.body.title,
            desc: req.body.desc
        });
        const result = await TodoFile.save();
        res.status(200).json(result);
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}

exports.putData = async (req,res)=>{
    try{
        const TodoFile = await TodoTable.updateOne(
            {_id: req.body._id},
            {$set:{
                title: req.body.title,
                desc: req.body.desc,
            }});
            res.status(200).json(TodoFile);
            console.log(TodoFile)
    }
    catch(err){
        console.log(err);
    }
}

exports.deleteData = async (req,res) =>{
   try{
    const TodoFile = await TodoTable.deleteOne({_id: req.body._id});
    res.status(200).json(TodoFile);
   }
   catch(err){
    console.log(err);
   }
}