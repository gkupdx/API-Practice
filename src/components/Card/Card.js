// Card.js - component for each individual card that displays API data
import React from 'react';
import './card.css';

const Card = ({ activity, type, participants }) => {
    return (
        <div className='card'>
            <h1>{activity}</h1>
            <p>Type of activity: {type}</p>
            <p>Number of participants: {participants}</p>
        </div>
    )
}

export default Card;