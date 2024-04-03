import {Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";


function App() {
  return (
    <>
<Nav/>
     <main><Outlet/></main>
    </>
  );
}

export default App;