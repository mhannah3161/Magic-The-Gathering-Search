import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './src/utils/themes.js';

import App from './App.jsx';
import Error from './src/pages/error.jsx';
import Homepage from './src/pages/homepage.jsx';
import ProfilePage from './src/pages/ProfilePage.jsx';
import Login from './src/pages/Login.jsx';
import Signup from './src/pages/Signup.jsx';
import Collections from './src/pages/Collections.jsx';
import Decks from './src/pages/Decks.jsx';

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
                element: <Decks />
            }
        ]
}]);

ReactDOM.createRoot(document.getElementById('root')).render( <RouterProvider router={router} /> 
);