import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import requiresLogin from './requires-login';

//import Chart from './chart';
import Button from './button';
import YearSummaryList from './year-summary-list';

export function Portfolio (props){
    const toInvestmentData = () => {
        console.log('Links to InvestmentData');
    };

    const toInvestmentForm = () => {
        console.log('Links to InvestmentForm')
    };

    return(
        <div className='view-port'> 
        <h1>Your Investment Portfolio</h1>
        <h2>Current Worth: {props.currentWorth}</h2>
        <section>
            {/* <Chart/> */}
            <YearSummaryList/>
        </section>
        <Link to='/market-analysis'>
            <Button name='Review Investment Data' handleClick={toInvestmentData}/>
        </Link>
        <Link to='/investment-form'>
            <Button name='Back to Investing!' handleClick={toInvestmentForm}/> 
        </Link>
        </div> 
    );
}

const mapStateToProps = (state, props) => ({
    currentWorth: '$5,000' //change to state.user.currentWorth when reducer is set up
});

export default requiresLogin()(connect(mapStateToProps)(Portfolio));
