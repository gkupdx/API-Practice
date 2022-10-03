import React from 'react';
import Logo from '../Logo/Logo';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Logo />
            <div className='navBtns'>
                <button>Home</button>
                <button>API Index</button>
                <button>About</button>
            </div>
        </nav>
    )
}

export default Navbar;