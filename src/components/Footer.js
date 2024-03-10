import { useContext } from "react"
import UserContext from "../utils/UserContext"

const Footer = () => {
    const { user } = useContext(UserContext)
    return (
        <div id="footer" className="w-full h-[10rem] bg-amber-50 sticky top-0">
            <p className="text-xl font-bold text-center">Footer</p>
            <p className="text-lg text-center">{user.username} - {user.email}</p>
        </div>
    )
}

export default Footer