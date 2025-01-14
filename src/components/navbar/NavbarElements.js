// NavbarElements.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'nav-link active' : 'nav-link';
    };

    const navLinks = [
        { path: '/', label: 'Home'}
    ];

    return (
        <nav className='navbar'>
            <div className="container">
                <div className='navbar-left'>
                    <Link to="/" className='logo'>
                        Qutron
                    </Link>
                </div>
                <div className='navbar-center'>
                    <ul className='nav-links'>
                        <li>
                            <Link to='/' className={isActive('/')}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/about' className={isActive('/about')}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to='/projects' className={isActive('/projects')}>
                                Projects
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='navbar-right'>
                    <Link to='/signin' className='sign-in-button'>
                        Sign In
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;