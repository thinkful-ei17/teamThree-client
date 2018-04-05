import React from 'react';
import confettiMan from '../design-stuff/CentsibleSplash/confetti-guy.jpg';
import './splash.css';

export default function Splash(props){

    return(

        <div className='splash-div'>
            <img src={confettiMan} alt='A very happy man in a cloud of confetti.'/>
            {/* <h1 className='white-text'>Centsible.</h1> */}
                <p className='primary-text-color'>
                    Start Making Cents of Investing
                </p>
            <section>
                <div className='virtue'>
                    <h2 className='primary-text-color'>
                        Virtue 1
                    </h2>
                </div> 
                <div className='virtue'>   
                    <h2 className='primary-text-color'>
                        Virtue 2
                    </h2>
                </div>
                <div className='virtue'>
                    <h2 className='primary-text-color'>
                        Virtue 3
                    </h2>
                </div>    
            </section>

        </div>
    )
}