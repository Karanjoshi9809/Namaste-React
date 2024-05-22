import { useState } from "react"
import { Link } from "react-router-dom"
import useIsOnline from "../utils/useIsOnline"
import { useSelector } from "react-redux"

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const isOnline = useIsOnline()

    const cartItems = useSelector(store => store.cart.items)
    console.log(cartItems)
    
    return (
        <div id="header" className="sticky top-0 w-full flex border-2 mb-1 rounded-md justify-between items-center p-2 bg-amber-50 shadow-sm max-sm:flex-col">
            <Link to="/" className="text-2xl font-semibold">FlavorFusion</Link>
            <div className="flex gap-6 mr-2 max-sm:flex-wrap justify-center">
                {isOnline ? <li className="list-none font-medium text-lg">✅</li> 
                            : <li className="list-none font-medium text-lg">🔴</li>}
                <li className="list-none font-medium text-lg"><Link to="/">Home</Link></li>
                <li className="list-none font-medium text-lg"><Link to="/about">About</Link></li>
                <li className="list-none font-medium text-lg"><Link to="/contact">Contact</Link></li>
                <li className="list-none font-medium text-lg"><Link to="/cart">Cart {cartItems.length === 0 ? "" : cartItems.length }</Link></li>
                <li className="list-none font-medium text-lg"><Link to="/instamart">Instamart</Link></li>
                {!isLoggedIn ? (<button 
                                    onClick={() => setIsLoggedIn(true)}
                                    className="border-2 px-[1rem] rounded-md bg-green-400"
                                    >Login</button>) 
                            : (<button 
                                    onClick={() => setIsLoggedIn(false)}
                                    className="border-2 px-[1rem] rounded-md bg-red-400"
                                    >Logout</button>)}
            </div>
        </div>
    )
}

export default Header