import "../Style/home.scss";
import Article from "../Components/Article";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [articles, setArticles] = useState([]);

 
    const getArticles = async () => {
      try {
        const res = await axios.get("http://localhost:3310/api/articles");
        setArticles(res.data);
      } catch (error) {
        console.error("Error", error);
      }
    };



  useEffect(() => {
    getArticles(); 
  }, []); 

  const handleDeleteArticle = async (id) => {
    try {
      await axios.delete(`http://localhost:3310/api/articles/${id}`);
      getArticles();
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  return (
    <section className="home-page">
      <div className="title">
        <h1>MES POSTS</h1>
      </div>
      <div className="">
        {articles.map((article) => (
          <Article
            key={article.idArticle}
            articleId={article.idArticle}
            titre={article.titre}
            date={article.date_ajout}
            content={article.détail_article}
            auteur={article.Utilisateur_idUtilisateur}
            deleteArticle={handleDeleteArticle}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;
