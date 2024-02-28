import { useState } from "react"
import FlavorFusionLogo from '../assets/FlavorFusionLogo.jpg'
import { Link } from "react-router-dom"

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <div className="header">
            <Link to="/"><img className="logo" alt="Logo" src={FlavorFusionLogo} /></Link>
            <div className="nav-items">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                {!isLoggedIn ? (<button onClick={() => setIsLoggedIn(true)}>Login</button>) 
                            : (<button onClick={() => setIsLoggedIn(false)}>Logout</button>)}
            </div>
        </div>
    )
}

export default Header