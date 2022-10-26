//// ApiList.js - page to display all of the free APIs that were showcased
import './api_page.css';

const ApiPage = () => {
    return (
        <div className="apiPage">
            <h1>Index of all APIs displayed on here:</h1>
            <ul>
                <li>The Bored API - <a href="https://www.boredapi.com/">https://www.boredapi.com/</a></li>
                <li>Cat Facts - <a href="https://catfact.ninja/">https://catfact.ninja/</a></li>
                <li>JSON Typicode - <a href="https://jsonplaceholder.typicode.com/">https://jsonplaceholder.typicode.com/</a></li>
            </ul>
        </div>
    )
}

export default ApiPage;