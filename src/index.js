import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from  './App';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Profile from './components/Profile';
import ProfileClass from './components/ProfileClass'
// import Instamart from './components/Instamart';
import Shimmer from './components/Shimmer';

const Instamart = lazy(() => import('./components/Instamart'));

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />,
                children: [
                    {
                        path: "profile",
                        // element: <Profile />
                        element: <ProfileClass />
                    }
                ]
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu />
            },
            {
                path: "/instamart",
                element: <Suspense fallback={<Shimmer />}>
                            <Instamart />
                         </Suspense> 
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <RouterProvider router={appRouter} />    
)