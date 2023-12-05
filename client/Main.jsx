import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './src/styles/index.css'

import App from './App.jsx';
import Error from './src/pages/error.jsx';
import Homepage from './src/pages/homepage.jsx';
import Profile from './src/pages/profile.jsx';
import Login from './src/pages/login.jsx';
import Signup from './src/pages/signup.jsx';
import Signout from './src/pages/signout.jsx';

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
                path: '/profile',
                element: <Profile />
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
                path: '/signout',
                element: <Signout />
            }
        ]
}]);

ReactDOM.createRoot(document.getElementById('root')).render( <RouterProvider router={router} /> 
);