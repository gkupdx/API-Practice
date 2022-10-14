import React from 'react';
import Logo from '../Logo/Logo';
import './navbar.css';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { goToPage } from '../../reducers/navbar';

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const navState = useSelector((state) => state.navbar.value);

    // on nav button click, reroute to correct page
    const reroute = (page) => {
        let path = '';

        if (page === 'home') {
            path = '/';
        } else if (page === 'about') {
            path = '/about'
        } else {
            path = '/api-list'
        }

        dispatch(goToPage({ page: page }));
        navigate(path);
    }

    // on state change, save CURRENT PAGE to sessionStorage
    useEffect(() => {
        sessionStorage.setItem('SAVE_PAGE', JSON.stringify(navState.page));
    }, [navState.page]);

    return (
        <nav className='navbar'>
            <Logo />
            <div className='navBtns'>
                <button className={navState.page === 'home' ? 'navBtn activePage' : 'navBtn'} onClick={() => reroute('home')}>Home</button>
                <button className={navState.page === 'api-list' ? 'navBtn activePage' : 'navBtn'} onClick={() => reroute('api-list')}>API Index</button>
                <button className={navState.page === 'about' ? 'navBtn activePage' : 'navBtn'} onClick={() => reroute('about')}>About</button>
            </div>
        </nav>
    )
}

export default Navbar;