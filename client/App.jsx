import { Outlet } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Header from './src/components/Header.jsx';
import Navbar from './src/components/Navbar.jsx';
import Footer from './src/components/Footer.jsx';
import BGimg from './src/pics/forest_bg.png';
import themes from './src/utils/schema.json';


const App = () => {
    
    const [selectedTheme, setSelectedTheme] = useState(themes["devoid"]);


    return (
<>
<div style={{ backgroundImage: `url(${BGimg})`,
backgroundSize: 'cover' }}>
    <Navbar selectedTheme={selectedTheme} />
    <Header selectedTheme={selectedTheme} setSelectedTheme={setSelectedTheme} style={{fontFamily: selectedTheme.font}}/>
    <Outlet />
    <Footer selectedTheme={selectedTheme} />
    </div>
</>

    )
};

export default App;