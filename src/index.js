import React from 'react';
import ReactDOM from 'react-dom/client';
import App from  './App';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

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
                element: <About />
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
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <RouterProvider router={appRouter} />    
)