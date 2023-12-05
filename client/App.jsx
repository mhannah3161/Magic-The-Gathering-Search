import { Outlet } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './src/components/Header.jsx';
import Navbar from './src/components/Navbar.jsx';
import Footer from './src/components/Footer.jsx';

function App() {
    const [theme, setTheme] = useState('');

    const handleChange = (selectedTheme) => {
        setTheme(themes[selectedTheme.value]);
    };

    const refCallback = (node) => {
        if (node) {
            theme && 
            Object.keys(theme).forEach((element) => {
                node.style.setProperty(element, theme[element], 'important');
                if (element === 'background-color' || element === 'background') {
                    document.body.style.background = theme[element];
                }
            });
        }
    }


    return (
        <div ref={refCallback} className='main-section'>
            <Header handleChange={handleChange} />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
};

export default App;