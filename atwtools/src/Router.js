// src/Router.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home'; // นี่คือหน้าหลักของคุณ
import About from './components/About'; // นี่คือหน้าเกี่ยวกับของคุณ
import Contact from './components/Contact'; // นี่คือหน้าติดต่อของคุณ

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
