import "../Style/home.scss";
import Article from "../Components/Article";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3310/api/articles")
      .then((response) => setArticles(response.data))
      .then(console.log(articles));
  }, []);
  return (
    <section className="home-page">
      <div className="title">
        <h1>MES POSTS</h1>
      </div>
      <div className="">
        {articles.map((article)=>
        <Article key={article.idArticle} titre={article.titre} date={article.date_ajout} content={article.détail_article} auteur={article.Utilisateur_idUtilisateur}/>
        )}
      
      </div>
    </section>
  );
};

export default Home;
