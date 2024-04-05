import { useState } from "react";
import axios from "axios";
import { format } from 'date-fns';
import "../Style/publier.scss";

const Publier = () => {
  const [message ,setMessage]= useState("");
  const [titleMessage ,setTitleMessage]= useState("");
  const idUser= 1 ;
  const date=new Date()
  const dateFormatee = format(date, 'dd/MM/yyyy');

  const handleSumitForm =  (e)=>{
    e.preventDefault();

     axios.post("http://localhost:3310/api/articles/",{
      titre : titleMessage,
      date_ajout : dateFormatee,
      détail_article:message,
      Utilisateur_idUtilisateur: idUser,
    })

    .then(()=>{
      setMessage("");
      setTitleMessage("")
      
    })
};

  return (
    <div>
      <div className="title">
        <h1>PUBLIER UN MESSAGE</h1>
      </div>
     <div className="publication-container">
      <form action="" className="publication-message" onSubmit={handleSumitForm}>
      <label htmlFor="titre-message">TITRE</label>
        <input type="text" id="titre-message" value={titleMessage}onChange={(e)=>setTitleMessage(e.target.value)}/>
        <label htmlFor="publication-content">MESSAGE </label>
        <input type="text" id="publication-content"value={message} onChange={(e)=>setMessage(e.target.value)} />

        <input type="submit" id="submit-message-button"/>
      </form>
      
      </div> 
    </div>
  );
};

export default Publier;