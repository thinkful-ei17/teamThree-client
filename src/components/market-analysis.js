import React from 'react';
import {connect} from 'react-redux';

import Button from './button';


export function MarketAnalysis(props){
    let name,
        handleClick;

    if (props.year === '0'){
        name = 'Make My First Investment!';
        handleClick = () => {
            console.log('This button links to Investment Form');
        }
    }
    else {
        name = 'Show Me My Investment',
        handleClick = () => {
            console.log('This button links to InvestmentReturn');
        }
    }

    return(
      <div>  
        <h1>Market Analysis: Year {props.year}</h1>
        <section className='market-analysis-risks'>
        <p>Aggressive: {props.aggressive}% change</p>
        <p>Moderate: {props.moderate}% change</p>
        <p>Conservative: {props.conservative}% change</p>
        <p>Mattress: 0.0% change</p>
        </section>
        <Button name={name} handleClick={handleClick}/>
      </div>  
    );
}

const mapStateToProps = (state, props) => ({
    year: '1', //change to come from state
    conservative: '0.75', //change to come from state
    moderate: '1.2', //change to come from state
    aggressive: '3.2' //change to come from state
});

export default connect(mapStateToProps)(MarketAnalysis)