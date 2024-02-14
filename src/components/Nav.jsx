import { NavLink } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import Logo from "./nav/Logo"

function Nav() {
    const { isLoggedIn, logout } = useAuth();
    return (
        <nav>
            <ul>
                <Logo></Logo>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="Events">Events</NavLink></li>
                {isLoggedIn ? <li><NavLink to="Logout">Logout</NavLink></li> : <li><NavLink to="Login">Login</NavLink></li>}
            </ul>
        </nav>
    )
}

export default Nav
