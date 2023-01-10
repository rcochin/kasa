import Logo from "../../assets/logo.png"
import "./navbar.css"
import { NavLink } from 'react-router-dom';

function Navbar(){
    return (
        <nav>
            <ul>
                <a href="/"><li><img src={Logo} alt="Logo" className="logo"/></li></a>
                <div>
                    <NavLink className="nav-link" to="/">Accueil</NavLink>
                    <NavLink className="nav-link" to="/a-propos">À propos</NavLink>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar