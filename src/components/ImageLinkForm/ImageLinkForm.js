import React from 'react';
import 'tachyons'
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f3'>
                {'This Magic Brain will detect faces in your pictures.'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input 
                        className='f4 pa2 w-70 center' 
                        type='text' onChange={onInputChange}
                        defaultValue='https://www.thestatesman.com/wp-content/uploads/2017/08/1493458748-beauty-face-517.jpg'
                    /> 
                    <button 
                        className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' 
                        onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
        </div>
    ) 
}

export default ImageLinkForm;