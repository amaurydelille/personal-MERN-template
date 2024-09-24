import { Outlet } from "react-router-dom";
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';
import React from 'react';

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;