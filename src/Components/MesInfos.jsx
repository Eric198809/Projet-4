
import { useState,useEffect } from "react";
import "../Style/mesInfos.scss";
import axios from "axios";

const MesInfos = () => {
const [user,setUser]= useState([]);

const getInfosUser = async()=>{
  try{

  axios.get("http://localhost:3310/api/users/1")
  .then((response)=> setUser(response.data))
}catch (error) {
        console.error("Error", error);
      }
}

useEffect(() => {
  getInfosUser(); 
}, []); 

  return (
    <>
    <section className="infos-container">
       <div className="title">
        <h1>MES INFOS</h1>
      </div>
      <>
      
  <div key={user.idUtilisateur} className="infos-content">
    <div className="nom-info">
      <h1>NOM</h1>
      <h3>{user.nom}</h3>
    </div>
    <div className="prenom-info">
      <h1>PRENOM</h1>
      <h3>{user.prenom}</h3>
    </div>
    <div className="mail-info">
      <h1>EMAIL</h1>
      <h3>{user.email}</h3>
    </div>
  </div> 

    </>
       </section>
    </>
   
  );
};

export default MesInfos;