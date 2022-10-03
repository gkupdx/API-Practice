import React from 'react';
import './footer.css';

import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className='links'>
                <a href="#community">Community</a>
                <a href="#contribute">Licensing</a>
                <a href="#payment">Payment Options</a>
                <a href="#covid">COVID-19 Safety</a>
                <a href="#support">Support</a>
                <a href="#faq">FAQ</a>
                <a href="#mission">Our Mission</a>
                <a href="#ukraine">Stand with Ukraine</a>
                <a href="#about">Careers</a>
            </div>

            <div className='social'>
                <a href="#github"><FaGithub /></a>
                <a href="#linkedin"><FaLinkedin /></a>
                <a href="#medium"><FaMedium /></a>
            </div>
        </footer>
    )
}

export default Footer;