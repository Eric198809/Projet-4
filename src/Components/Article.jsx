import PropTypes from "prop-types";
import image from "../assets/imagetest.png";
import "../Style/article.scss";
import { useState } from "react";

const Article = ({ articleId ,titre, date, content, auteur, deleteArticle }) => {
  const [id] = useState(articleId);

  const handleDeleteArticle = () => {
    deleteArticle(id); 
  };

  return (
    <section>
      <div className="article-container" >
        <div className="infos-article">
          <div className="Title_author">
            <h1>{titre}</h1>
            <div className="auteur">
              <img src={image} alt="a" />
              <p>{auteur}</p>
            </div>
          </div>
          <div className="date">
            <p>{date}</p>
          </div>
        </div>
        <div className="article-content">
          <p>{content}</p>
        </div>
        <div className="like-supp">
          <span>coeur</span>
          <button type="submit" onClick={handleDeleteArticle}>Supprimer</button>
        </div>
      </div>
    </section>
  );
};

Article.propTypes = {
  articleId: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  titre: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  auteur: PropTypes.string.isRequired,
};

export default Article;
