import React from 'react';
import './about.css';

const About = () => {
    return (
        <div className='about'>
            <div className='aboutMe'>
                <h1>Hey, my name is G.Ku!</h1>
                <p>
                    The point of this web app is to provide easy-to-observe
                    demonstrations of some free web API. I personally struggled with
                    the concept of working with fetch API a lot, and so I wanted to
                    create a free resource for other developers to use if they're also
                    struggling with APIs in general.
                </p>
                <p>
                    All APIs displayed on this website <strong>do not require</strong> any
                    API keys, personal access tokens, or authentication/authorization codes.
                    While I understand it isn't very realistic to use auth-less APIs in a 
                    real-world production app, because this app's target audience is for those
                    just getting their feet wet in the API world, I wanted to minimize the overhead
                    as much as possible for new developers.
                </p>
            </div>
        </div>
    )
}

export default About;