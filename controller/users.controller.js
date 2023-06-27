const Users = require('../model/user.model');

exports.getUser = async(req,res) =>{
    try{
      const result = await Users.find({});
      res.status(200).send(result);
      console.log(result);
    }
    catch(err){
      console.log(err)
    }
  }
exports.getUserBy = async(req,res) =>{
    try{
      const result = await Users.findOne({'UID':req.params.uid});
      res.status(200).send(result);
      console.log(result);
    }
    catch(err){
      console.log(err)
    }
  }
  
  exports.postUser = async (req,res)=>{
      try{
          const user = new Users({
            email: req.body.email,
            UID: req.body.uid,
            role: 'seller'
          });
          const result = await user.save();
          res.status(200).json(result);
          console.log(result);
      }
      catch(err){
          console.log(err);
      }
  }
  
//   exports.putData = async (req,res)=>{
//       try{
//           const TodoFile = await TodoTable.updateOne(
//               {_id: req.body._id},
//               {$set:{
//                   title: req.body.title,
//                   desc: req.body.desc,
//               }});
//               res.status(200).json(TodoFile);
//               console.log(TodoFile)
//       }
//       catch(err){
//           console.log(err);
//       }
//   }
  
//   exports.deleteData = async (req,res) =>{
//      try{
//       const TodoFile = await TodoTable.deleteOne({_id: req.body._id});
//       res.status(200).json(TodoFile);
//      }
//      catch(err){
//       console.log(err);
//      }
//   }