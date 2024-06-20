import { React, useEffect } from 'react'
import { Navbar, Footer, } from '../Components/export'
import { Outlet, useNavigate, useLocation, } from 'react-router'

function Homelayout() {
    // to not show the layout component
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        const currentPath = location.pathname;
        if (currentPath === '/') {
            navigate('/home');
        }

    }, []);
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Homelayout
