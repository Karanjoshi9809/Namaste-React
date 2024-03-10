import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import UserContext from './utils/UserContext';

function App() {
    const [user, setUser] = useState({
        username: "Karan Joshi",
        email: "karanjoshi9809@gmail.com"
    })
    return (
        <>
            <UserContext.Provider value={{user : user}}>
                <Header />
                <Outlet />
                <Footer />
            </UserContext.Provider>
        </>
    );
}

export default App;