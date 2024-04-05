const {findOne ,addOne }=require("../model/userModel")
const validateUser = require("../Validator/userValidator");
const { hashPassword } = require("../helper/argonHelper");

const getOne= async(req,res)=>{
  const userId=parseInt(req.params.id)
  try {
    if(isNaN(userId)){
      throw new Error()
    }
    const [user]= await findOne(userId)
    res.json(user);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const createOne= async(req,res)=>{
  const errors=validateUser(req.body)
  if (errors) {
  return res.status(401).send(errors);  
  }
const hashedPassword = await hashPassword(req.body.password);
const result= await addOne ({...req.body, password:hashedPassword});
res.status(201).send(result);
};

module.exports = { getOne, createOne };