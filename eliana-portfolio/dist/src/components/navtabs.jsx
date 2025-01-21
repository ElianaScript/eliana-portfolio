import React from 'react';
import {Link} from 'react-router-dom';

function NavTabs() {
    return (
     <ul className="nav-tabs">
       <li className="nav-item">
         <Link to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-item">
            <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className="nav-item">
            <Link to="/resume">Resume</Link>
        </li>
        <li className='nav-item'>
            <Link to="/contact">Contact Me</Link>
        </li>
        </ul>
    );
}

export default NavTabs;