import React from 'react';
import splashImg from '../../assets/generic_grayscale_wallpaper.jpg';
import './hero_banner.css';

const HeroBanner = () => {
    return (
        <div className='heroBanner'>
            <h1>Arrow F(x)</h1>
            <p>The Free API Hub</p>
            <img src={splashImg} alt="generic splash" />
        </div>
    )
}

export default HeroBanner;