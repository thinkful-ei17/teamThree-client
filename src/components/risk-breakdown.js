import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import requiresLogin from './requires-login';
import Button from './button';
import RiskDetail from './risk-detail';
import PieChart from './pie-chart';

import { hideIntroCard } from '../actions/intro';

export function RiskBreakdown(props){
    const markIntroComplete = () => {
        props.dispatch(hideIntroCard());
    };

    return (
        <div className='risk-breakdown viewport'>
            <h2 className='primary-heading'>Risk Breakdown</h2>
            <section className='risk-details'>
                <div className='risk-overview-container'>
                <RiskDetail riskType='Conservative' stocks='20' bonds='80'/>
                <PieChart name='conservative' stocksValue={20} bondsValue={80} />
                </div>
                <div className='risk-overview-container'>
                <RiskDetail riskType='Moderate' stocks='50' bonds='50'/>
                <PieChart name='moderate' stocksValue={50} bondsValue={50} />
                </div>
                <div className='risk-overview-container'>
                <RiskDetail riskType='Aggressive' stocks='80' bonds='20'/>
                <PieChart name='aggressive' stocksValue={80} bondsValue={20} />
                </div>
            </section>
            <Link to='/investment-form'>
                <Button class='blue-button' name="Let's Get Investing!" handleClick={markIntroComplete} />
            </Link>
        </div>    
    );
}

export default requiresLogin()(connect()(RiskBreakdown));