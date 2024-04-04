import PropTypes from "prop-types";
import image from "../assets/imagetest.png";
import "../Style/article.scss";

const Article = ({ titre, date, content, auteur }) => {
  return (
    <section>
      <div className="article-container">
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
          <button type="button">Supprimer</button>
        </div>
      </div>
    </section>
  );
};

Article.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  titre: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  auteur: PropTypes.string.isRequired,
};

export default Article;
