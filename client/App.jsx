import { globalStyles } from './src/utils/globalStyles';
import { Outlet } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
// import Webfont from 'webfontloader';
import Header from './src/components/Header.jsx';
import Navbar from './src/components/Navbar.jsx';
import Footer from './src/components/Footer.jsx';
import BGimg from './src/pics/forest_bg.png';
import {useTheme} from './src/utils/useTheme.js';
import themes from './src/utils/schema.json';


const App = () => {
    // const {theme, themeLoaded, getFonts} = useTheme();
    const [selectedTheme, setSelectedTheme] = useState(themes["devoid"]);

    // useEffect(() => {
    //     setSelectedTheme(theme);
    // }, [themeLoaded]);

    // useEffect(() => {
    //     Webfont.load({
    //         google: {
    //             families: getFonts()
    //         }
    // });
// });


    return (
<>
<div style={{ backgroundImage: `url(${BGimg})`,
backgroundSize: 'cover' }}>
{/* { */}
    {/* // themeLoaded && <ThemeProvider theme={selectedTheme}>
    // <globalStyles /> */}
    <Navbar selectedTheme={selectedTheme} />
    <Header selectedTheme={selectedTheme} setSelectedTheme={setSelectedTheme} style={{fontFamily: selectedTheme.font}}/>
    <Outlet />
    <Footer selectedTheme={selectedTheme} />
    {/* </ThemeProvider> */}
{/* } */}
    </div>
</>

    )
};

export default App;