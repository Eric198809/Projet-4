import "../Style/publier.scss";

const Publier = () => {
  return (
    <div>
      <div className="title">
        <h1>PUBLIER UN MESSAGE</h1>
      </div>
     <div className="Publication-container">
      <form action="">
        <label htmlFor="publication-content"></label>
        <input type="text" id="publication-content" />
        <label htmlFor=""></label>
        <input type="text" />
        <input type="submit" />
      </form>
      
      </div> 
    </div>
  );
};

export default Publier;