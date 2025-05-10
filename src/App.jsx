import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Academic from './pages/academic';
import NavTabs from'./components/navtabs';
import './index.css';

const App = () => {
    return (
        <>
            <NavTabs />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/academic" element={<Academic />} />
            </Routes>
        </>
    );
};

export default App;
