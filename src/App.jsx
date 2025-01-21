import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';
import NavTabs from'./components/navtabs';
import './index.css';

const App = () => {
    return (
        <>
            <NavTabs />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </>
    );
};

export default App;
