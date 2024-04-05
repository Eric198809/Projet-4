const { findAll, findOne,createOne, deleteOne } = require("../model/articleModel");

const getAll = async (req, res) => {
  try {
    const articles = await findAll();
    res.json(articles);
  } catch (error) {
    res.sendStatus(500);
  }
};

const getOne = async (req, res) => {
  try {
    const articleId = await findOne(req.params.id);

    if (articleId === 0) {
      res.sendStatus(404);
    } else {
      res.json(articleId);
    }
  } catch (err) {
    console.error(err);
  }
};

const addOne = async (req, res)=> {
  const article = req.body;
  try {
    const insertId = createOne(article);
    res.status(201).json({ insertId });
  } catch (err) {
    console.error(err);
  }
};

const destroyOne = async (req, res) => {
  try {
    const articleId = await deleteOne(req.params.id);

    if (articleId === 0) {
      res.sendStatus(404);
    } else {
      res.json(articleId);
    }
  } catch (err) {
    console.error(err);
  }
};


module.exports = { getAll, getOne, addOne, destroyOne };
