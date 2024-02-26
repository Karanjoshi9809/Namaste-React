import { useState } from "react"

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <div className="header">
            <img className="logo" alt="Logo" src="https://yt3.googleusercontent.com/Z5AwukhuUCwpdx3m75x1Yl5t4NQEeBdIDB8uf8CpankcRrNFZTMD6NlEOJSB0QnRfito9_tV=s900-c-k-c0x00ffffff-no-rj" />
            <div className="nav-items">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Cart</a></li>
                {!isLoggedIn ? (<button onClick={() => setIsLoggedIn(true)}>Login</button>) 
                            : (<button onClick={() => setIsLoggedIn(false)}>Logout</button>)}
            </div>
        </div>
    )
}

export default Header