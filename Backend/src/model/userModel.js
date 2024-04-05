const db = require("../db");

const findOne = async (id) => {
  const [user] = await db.query(
    `select * from utilisateur where idUtilisateur = ?`,
    [id]
  );
  return user;
};

const addOne = async(user)=> {
  const { nom, prenom, email, password} = user;
try {
  const [result]= await db.query( "insert into `utilisateur` (nom, prenom, email, password) values (?,?,?,?)",
  [nom, prenom, email, password]
); 
return  { id: result.insertId, nom, prenom, email };
} catch (error) {
  console.log(error);
}

}

const findByEmail = async(email)=>{
  try{
const[user]= await db.query("select * from utilisateur where email = ?", 
[email]);
return user
}catch(error){
console.error(error)
}
}

module.exports = { findOne , addOne, findByEmail };
