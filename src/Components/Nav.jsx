import { Link, } from "react-router-dom";
import "../Style/nav.scss";

const Nav = () => {
    return (
        <div>
            <nav className="Navbar">
     <li> <Link to = "/">Home</Link> </li>
     <li> <Link to = "/monespace">Mon espace</Link> </li>
     <li> <Link to = "/">Se connecter</Link> </li>
     </nav>
        </div>
    );
};

export default Nav;