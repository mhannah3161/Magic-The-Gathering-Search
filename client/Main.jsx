import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx';
import Error from './src/pages/Error.jsx';
import Homepage from './src/pages/HomePage.jsx';
import ProfilePage from './src/pages/ProfilePage.jsx';
import Login from './src/pages/Login.jsx';
import Signup from './src/pages/Signup.jsx';
import Collections from './src/pages/collections.jsx';
import DeckPage from './src/pages/decks.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Homepage />
            },
            {
                path: '/profilepage',
                element: <ProfilePage />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/collections',
                element: <Collections />
            },
            {
                path: '/decks',
                element: <DeckPage />
            }
        ]
}]);

ReactDOM.createRoot(document.getElementById('root')).render( <RouterProvider router={router} /> 
);