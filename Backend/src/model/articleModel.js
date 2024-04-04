const db = require("../db");

const findAll = async () => {
  try {
    const [articles] = await db.query("select * from article");
    return articles;
  } catch (error) {
    console.error(error);
  }
};

const findOne= async (id)=> {
  const [result] = await db.query(
    `select * from article where idArticle = ?`,
    [id]
  );
  return result[0];
}

const createOne= async (article)=> {
  const utilisateurId = 1;
  const [result] = await db.query(
    `insert into article (titre, date_ajout,détail_article, image,  Utilisateur_idUtilisateur ) 
    values (?,?,?,?,?)`,
    [
      article.titre,
      article.date_ajout,
      article.détail_article,
      article.image,
      utilisateurId,
    ]
  );

  return result;
}

const deleteOne = async (id)=> {
  const [result] = await db.query(
    `delete from article where idArticle = ?`,
    [id]
  );
  return result;
}



module.exports = { findAll, findOne, createOne, deleteOne};