import React from 'react';

import Button from './button';
import RiskDetail from './risk-detail';

export default function RiskBreakdown(props){
    const toInvestmentForm = () => {
        console.log('This button links to InvestmentForm');
    };

    return (
        <div>
            <h1>Risk Breakdown</h1>
            <section className='risk-details'>
                <RiskDetail riskType='Conservative' stocks='20' bonds='80'/>
                <RiskDetail riskType='Moderate' stocks='50' bonds='50'/>
                <RiskDetail riskType='Aggressive' stocks='80' bonds='20'/>
            </section>
            <Button name="Let's Get Investing!" handleClick={toInvestmentForm}/>
        </div>    
    );
}