import React from 'react';
import confettiMan from '../design-stuff/CentsibleSplash/confetti-guy.jpg';
import './splash.css';

export default function Splash(props){

    return(

        <div className='splash-div'>
            <img src={confettiMan} alt='A very happy man in a cloud of confetti.'/>
            {/* <h1 className='white-text'>Centsible.</h1> */}
                <p className='white-text'>Start Making Cents of Investing</p>
        </div>
    )
}