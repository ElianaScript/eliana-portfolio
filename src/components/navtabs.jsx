import React from 'react';
import { Link } from 'react-router-dom';

function NavTabs() {
    return (
        <ul className="nav-tabs">
            <li className="nav-item">
                <Link to='/'>About Me</Link>
            </li>
            <li className="nav-item">
                <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className='nav-item'>
                <Link to="/academic">Academic Works</Link>
            </li>
            <li className='nav-item'>
                <Link to="/contact">Contact Me</Link>
            </li>
        </ul>
    );
}

export default NavTabs;