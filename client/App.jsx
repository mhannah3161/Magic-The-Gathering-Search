import { Outlet } from 'react-router-dom';
import Header from './src/components/header.jsx';
import Navbar from './src/components/navbar.jsx';
import Footer from './src/components/footer.jsx';

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