//// Docs.js - short & simple documentation for how the web app works
import './docs.css';
import optionPicker from '../../assets/undraw_option_picker.png';
import clickFetch from '../../assets/undraw_click_fetch.png';
import apiGallery from '../../assets/undraw_api_card_gallery.png';

const Docs = () => {
    return (
        <section className="docs">
            <div className='docStep'>
                <p><strong>Step 1</strong>: Pick an API from the dropdown menu!</p>
                <img src={optionPicker} alt="Undraw option picker" />
            </div>

            <div className='docStep'>
                <p><strong>Step 2</strong>: Hit the "Fetch!" button</p>
                <img src={clickFetch} alt="Undraw hit fetch button" />
            </div>

            <div className='docStep'>
                <p><strong>Step 3</strong>: See the API in action!</p>
                <img src={apiGallery} alt="Undraw API card gallery" />
            </div>
        </section>
    )
}

export default Docs;