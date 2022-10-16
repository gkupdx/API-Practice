//// Docs.js - short & simple documentation for how the web app works
import './docs.css';
import optionPicker from '../../assets/undraw_option_picker.png';
import clickFetch from '../../assets/undraw_click_fetch.png';
import apiGallery from '../../assets/undraw_api_card_gallery.png';
import Card from 'react-bootstrap/Card';

const Docs = () => {
    return (
        <section className="docs">
            <Card>
                <Card.Body className='docStep card-body'>
                    <p><strong>Step 1</strong>: Pick an API from the dropdown menu!</p>
                    <img src={optionPicker} alt="Undraw option picker" />
                </Card.Body>
            </Card>

            <Card>
                <Card.Body className='docStep card-body'>
                    <p><strong>Step 2</strong>: Hit the "Fetch!" button</p>
                    <img src={clickFetch} alt="Undraw hit fetch button" />
                </Card.Body>
            </Card>

            <Card>
                <Card.Body className='docStep card-body'>
                    <p><strong>Step 3</strong>: View a row of cards that display data from the chosen API!</p>
                    <img src={apiGallery} alt="Undraw API card gallery" />
                </Card.Body>
            </Card>

        </section>
    )
}

export default Docs;