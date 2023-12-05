import { Outlet } from 'react-router-dom';
import Header from './src/components/Header.jsx';
import Navbar from './src/components/Navbar.jsx';
import Footer from './src/components/Footer.jsx';

function App() {
    return (
        <>
            <Header />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default App;