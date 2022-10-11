import React from 'react';
import './about.css';

const About = () => {
    return (
        <div className='about'>
            <div className='aboutMe'>
                <h1>Hey, my name is G.Ku and welcome to my webapp, Arrow F(x)!</h1>
                <p>The point of this website is to simply provide easy-to-observe
                    demonstrations of some free web API. I personally struggled with
                    the concept of working with fetch API a lot, and so I wanted to
                    create a free resource for other developers to use if they're
                    struggling with APIs in general!
                </p>

                <p>
                    All resources on here are <i>completely free.</i> I have only listed
                    the APIs that don't cost a single cent to use. That said, I do not claim
                    ownership of any of the APIs displayed on here. If you want to say thanks,
                    you can buy me a coffee via Patreon! With that, good luck and have fun
                    learning the wonderful world of APIs!
                </p>
            </div>

            <div className='supportMe'>
                <h1>Patreon</h1>
            </div>
        </div>
    )
}

export default About;