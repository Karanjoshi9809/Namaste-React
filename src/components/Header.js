import { useState } from "react"
import { Link } from "react-router-dom"
import useIsOnline from "../utils/useIsOnline"
import { useSelector } from "react-redux"

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    // const isOnline = useIsOnline()

    const cartItems = useSelector(store => store.cart.items)
    console.log(cartItems)
    
    return (
        <div id="header" className="sticky z-10 top-0 w-full flex border-2 mb-1 rounded-md justify-between items-center p-2 h-20 bg-amber-50 shadow-sm max-sm:flex-col">
            <Link to="/" className="text-2xl font-semibold">FlavorFusion</Link>
            <div className="flex gap-6 mr-2 max-sm:flex-wrap justify-center">
                {/* {isOnline ? <li className="list-none font-medium text-lg text-green-500"></li> 
                            : <li className="list-none font-medium text-lg text-red-600">●</li>} */}
                <li className="list-none font-medium text-base hover:bg-yellow-400 rounded-md p-2"><Link to="/">Home</Link></li>
                <li className="list-none font-medium text-base  hover:bg-yellow-400 rounded-md p-2"><Link to="/about">About</Link></li>
                <li className="list-none font-medium text-base  hover:bg-yellow-400 rounded-md p-2"><Link to="/contact">Contact</Link></li>
                <li className="list-none font-medium text-base  hover:bg-yellow-400 rounded-md p-2"><Link to="/cart">Cart 🛒 ({cartItems.length })</Link></li>
                <li className="list-none font-medium text-base  hover:bg-yellow-400 rounded-md p-2"><Link to="/instamart">Instamart</Link></li>
                {!isLoggedIn ? (<button 
                                    onClick={() => setIsLoggedIn(true)}
                                    className="hover:bg-yellow-400 rounded-md p-2 font-medium text-base"
                                    >Login <span className="text-green-600">●</span></button>) 
                            : (<button 
                                    onClick={() => setIsLoggedIn(false)}
                                    className="hover:bg-yellow-400 rounded-md p-2 font-medium text-base"
                                    >Logout <span className="text-red-600">●</span></button>)}
            </div>
        </div>
    )
}

export default Header