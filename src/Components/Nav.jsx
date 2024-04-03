import { Link, } from "react-router-dom";
import "./nav.css";

const Nav = () => {
    return (
        <div>
            <nav className="Navbar">
     <li> <Link to = "/">Home</Link> </li>
     <li> <Link to = "/About">About</Link> </li>
     </nav>
        </div>
    );
};

export default Nav;