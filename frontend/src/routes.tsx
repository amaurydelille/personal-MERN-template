import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Layout from './components/Layout.tsx';
import HomePage from './pages/HomePage.tsx';


const DefaultRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route path='/' element={<HomePage />} />
            </Route>
        </Routes>
    );
}

export default DefaultRoutes;