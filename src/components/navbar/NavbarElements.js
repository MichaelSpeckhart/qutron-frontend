// STL imports
import React from 'react'
import { Link } from 'react-router-dom'

/**
 * @summary Reusable navigation bar. 
 * @author Michael Speckhart
 * @returns JSX.Element
 */
const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar-left'>
                <Link to="/" className='logo'>
                    Qutron
                </Link>
            </div>
            <div className='navbar-center'>
                <ul className='nav-links'>
                    <li>
                        <Link to='/' className='nav-link'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/about' className='nav-link'>
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;