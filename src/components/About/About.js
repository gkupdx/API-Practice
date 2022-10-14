import React from 'react';
import './about.css';

const About = () => {
    return (
        <div className='about'>
            <div className='aboutMe'>
                <h1>Hey, my name is G.Ku!</h1>
                <p>The point of this website is to simply provide easy-to-observe
                    demonstrations of some free web API. I personally struggled with
                    the concept of working with fetch API a lot, and so I wanted to
                    create a free resource for other developers to use if they're also
                    struggling with APIs in general!
                </p>
            </div>
        </div>
    )
}

export default About;