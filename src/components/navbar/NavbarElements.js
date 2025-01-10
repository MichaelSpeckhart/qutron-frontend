// STL imports
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { } from 'lucide-react'

/**
 * @summary Reusable navigation bar. 
 * @author Michael Speckhart
 * @returns JSX.Element
 */
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    

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
                    <li>
                        <Link to='/projects' className='nav-link'>
                            Projects
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;