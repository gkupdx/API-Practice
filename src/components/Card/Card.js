// Card.js - component for each individual card that displays API data
import { useState, useEffect } from 'react';
import React from 'react';
import './card.css';

const Card = ({ apiName }) => {
    const [data, setData] = useState({});

    // fetch from the correct resource given the name of API
    const fetchData = (nameOfApi) => {
        switch (nameOfApi) {
            case 'Bored API':
                fetch('http://www.boredapi.com/api/activity')
                    .then(res => res.json())
                    .then(data => {
                        setData({
                            name: 'Bored API',
                            activity: data.activity,
                            type: data.type,
                            participants: data.participants,
                        });
                    })
                    .catch(error => console.log('Error: ', error))
                break;
            case 'Cat Facts':
                fetch('https://catfact.ninja/fact')
                    .then(res => res.json())
                    .then(data => {
                        setData({
                            name: 'Cat Facts',
                            fact: data.fact,
                            length: data.length,
                        });
                    })
                    .catch(error => console.log('Error: ', error))
                break;
            case 'JSON Typicode':
                fetch('https://jsonplaceholder.typicode.com/posts/1')
                    .then(res => res.json())
                    .then(data => {
                        setData({
                            name: 'JSON Typicode',
                            id: data.id,
                            title: data.title,
                            body: data.body,
                        })
                    })
                    .catch(error => console.log('Error: ', error))
                break;
            default:
                fetch('https://jsonplaceholder.typicode.com/posts/1')
                    .then(res => res.json())
                    .then(data => {
                        setData({
                            name: 'JSON Typicode',
                            id: data.id,
                            title: data.title,
                            body: data.body,
                        })
                    })
                    .catch(error => console.log('Error: ', error))
        }
    }

    // fetch on initial render
    useEffect(() => {
        fetchData(apiName);
    }, [apiName]);

    return (
        <div className='card'>
            <h1>{data.name}</h1>
            {data.name === 'Bored API' &&
                <>
                    <p>{data.activity}</p>
                    <p>{data.type}</p>
                    <p>{data.participants}</p>
                </>}
            {data.name === 'Cat Facts' &&
                <>
                    <p>{data.fact}</p>
                    <p>{data.length}</p>
                </>}
            {data.name === 'JSON Typicode' &&
            <>
                <p>{data.id}</p>
                <p>{data.title}</p>
                <p>{data.body}</p>
            </>}
        </div>
    )
}

export default Card;