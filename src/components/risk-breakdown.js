import React from 'react';
import {Link} from 'react-router-dom'
import Button from './button';
import RiskDetail from './risk-detail';
import {connect} from 'react-redux';

import {hideIntroCard} from '../actions/intro-page';

export function RiskBreakdown(props){
    const markIntroComplete = () => {
        console.log('mark intro complete ran');
        props.dispatch(hideIntroCard());
    };

    return (
        <div>
            <h1>Risk Breakdown</h1>
            <section className='risk-details'>
                <RiskDetail riskType='Conservative' stocks='20' bonds='80'/>
                <RiskDetail riskType='Moderate' stocks='50' bonds='50'/>
                <RiskDetail riskType='Aggressive' stocks='80' bonds='20'/>
            </section>
            <Link to='/investment-form'>
                <Button name="Let's Get Investing!" handleClick={markIntroComplete} />
            </Link>
        </div>    
    );
}

export default connect()(RiskBreakdown);