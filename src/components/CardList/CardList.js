// CardList.js - houses a list of individual <Card /> components
import { useState, useEffect } from 'react';
import React from 'react';
import Card from '../Card/Card';
import './card_list.css';

const CardList = () => {
    // state to capture fetch API data
    const [cardContent, setCardContent] = useState({
        activity: '',
        type: '',
        participants: ''
    });

    // fetch & store API data from BoredAPI.com
    useEffect(() => {
        fetch('http://www.boredapi.com/api/activity/')
            .then(response => response.json())
            .then(data => {
                setCardContent({
                    activity: data.activity,
                    type: data.type,
                    participants: data.participants
                });
            })
            .catch(error => console.log("Error: ", error));
    }, []); // empty array as dependency to only run on INITIAL MOUNT


    return (
        <div className='cardList'>
            {/* check to make sure state has changed before rendering component */}
            {cardContent && <Card activity={cardContent.activity} type={cardContent.type} participants={cardContent.participants} />}
        </div>
    )
}

export default CardList;