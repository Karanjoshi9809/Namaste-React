import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import store from './utils/store';

function App() {
    const [user, setUser] = useState({
        username: "Karan Joshi",
        email: "karanjoshi9809@gmail.com"
    })
    return (
        <>
            <Provider store={store}>
                <UserContext.Provider value={{ user: user }}>
                    <Header />
                    <Outlet />
                    <Footer />
                </UserContext.Provider>
            </Provider>
        </>
    );
}

export default App;