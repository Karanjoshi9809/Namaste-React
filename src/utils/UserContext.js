import { createContext } from "react";

const UserContext = createContext({
    user: {
        username: "Dummy Name",
        email: "dummymail@gmail.com"
    }
})

export default UserContext