import React from 'react';
import confettiMan from '../design-stuff/CentsibleSplash/confetti-guy.jpg';
import lineChart from '../design-stuff/CentsibleSplash/line-chart-green.svg';
import piggyBank from '../design-stuff/CentsibleSplash/pig-blue.svg';
import transactionIcon from '../design-stuff/CentsibleSplash/balance-aqua.svg';
import './splash.css';

export default function Splash(props){

    return(

        <div className='splash-div'>
            <img src={confettiMan} alt='A very happy man in a cloud of confetti.'/>
            {/* <h1 className='white-text'>Centsible.</h1> */}
                <p className='primary-text-color'>
                    Start Making Cents of Investing
                </p>
            <section className='virtues'>
                <div className='virtue'>
                    <img src={piggyBank} alt='Piggy-bank'/>
                    <span className='virtue-heading'>
                        <h2 className='primary-text-color list-item-heading'>
                            Learn to Invest Wisely
                        </h2>
                    </span>
                </div> 
                <div className='virtue'>  
                    <img src={lineChart} alt='Line chart with two lines'/>
                    <span className='virtue-heading'> 
                        <h2 className='primary-text-color list-item-heading'>
                            Chart Your Growth
                        </h2>
                    </span>
                </div>
                <div className='virtue'>
                    <img src={transactionIcon} alt='Circular arrow wrapping around a dollar sign.'/>
                    <span className='virtue-heading'>
                        <h2 className='primary-text-color list-item-heading'>
                            Compare Strategies
                        </h2>
                    </span>    
                </div>    
            </section>

        </div>
    )
}