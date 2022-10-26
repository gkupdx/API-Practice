// CardList.js - houses a list of individual <Card /> components
import React, { useState } from 'react';
import Card from '../Card/Card';
import { FaCaretDown } from 'react-icons/fa';
import './card_list.css';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import DropdownItem from 'react-bootstrap/esm/DropdownItem';
// import 'bootstrap/dist/css/bootstrap.css';


const CardList = () => {
    const [dropActive, setDropActive] = useState(false);
    const [api, setApi] = useState({
        name: 'JSON Typicode',
        bg: '3-grey'
    });

    // // array of all API endpoints
    // const urls = [
    //     'http://www.boredapi.com/api/activity/',
    //     'https://catfact.ninja/fact/',
    //     'https://jsonplaceholder.typicode.com/posts/1',
    // ];

    // // fetch & store API data from Bored API
    // useEffect(() => {
    //     fetch('http://www.boredapi.com/api/activity/')
    //         .then(response => response.json())
    //         .then(data => {
    //             setCardContent({
    //                 name: 'Bored API',
    //                 activity: data.activity,
    //                 type: data.type,
    //                 participants: data.participants
    //             });
    //         })
    //         .catch(error => console.log("Error: ", error));
    // }, []); // empty array as dependency to only run on INITIAL MOUNT

    const toggleDropdown = () => {
        setDropActive(!dropActive);
    }

    const selectApi = (choice) => {
        if (choice === 1) {
            setApi({ 
                name: 'Bored API',
                bg: '1-grey'
            });
        } else if (choice === 2) {
            setApi({
                name: 'Cat Facts',
                bg: '2-grey'
            });
        } else if (choice === 3) {
            setApi({
                name: 'JSON Typicode',
                bg: '3-grey'
            });
        }
    }


    return (
        <div className='cardList'>
            <button onClick={toggleDropdown}>Select Your API <FaCaretDown /></button>
            {dropActive && 
            <div className='apiDropdown'>
                <p className={api.bg === '1-grey' ? 'bg-grey' : ''} onClick={() => selectApi(1)}>Bored API</p>
                <p className={api.bg === '2-grey' ? 'bg-grey' : ''} onClick={() => selectApi(2)}>Cat Facts</p>
                <p className={api.bg === '3-grey' ? 'bg-grey' : ''} onClick={() => selectApi(3)}>JSON Typicode</p>
            </div>}


            {/* check to make sure data has been fetched before rendering component */}
            <Card apiName={api.name}/>
        </div>
    )
}

export default CardList;