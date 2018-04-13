import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import requiresLogin from './requires-login';
import Chart from './chart';
import Button from './button';

import { fetchPortfolio } from '../actions/portfolio';

const numeral = require('numeral');

export class Lvl2InvestmentReturn extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchPortfolio());
    }
    
    keepInvesting = () => {
        console.log('Keep Investing');
    }

    toLvl2FiveYearReview = () => {
        console.log('to Lvl2 Five Year Review was clicked');
    }

    returnToPortfolio = () => {
        console.log('Return to Portfolio');
    }

    render() {
        let investmentReturnContent = 'Loading...';
        let { portfolio, year, previousFund, currentFund } = this.props;
        let investmentLink,
            name,
            handleClick;

        if (this.props.year === 10){
            investmentLink = '/lvl2-five-year-market';
            name = 'See Five Year Market Recap';
            handleClick = this.toLvl2FiveYearReview;
        } else{
            investmentLink = '/lvl2-investment-form';
            name = 'Keep Investing!';
            handleClick = this.keepInvesting;
        }

        if (portfolio) {
            let previousFundFormat = numeral(previousFund).format('0,0');
            let currentFundFormat = numeral(currentFund).format('0,0');

            const data = [
                {									
                    points: portfolio,
                    color: '#C24275'
                }
            ];

            let growth;

            if (portfolio[year]) {
                growth = portfolio[year].growth;
            }
            
            investmentReturnContent = (
                <div>    
                    <h2 className='primary-heading'>Investment Returns: Year {year}</h2>
                    <Chart yMin={0} xMax={10} data={data} />

                    <h3 className='secondary-heading primary-text-color'>Portfolio Summary Year {year}:</h3>

                    <div className="vector-wrapper flex-start">
                        <div className='blurb-wrapper descriptive-content flex-row min-width-blurb'>
                            <h4 className='margin-top'>Start: </h4>
                            <p className='margin-left'> ${previousFundFormat}</p>
                        </div>
                        <div className='blurb-wrapper descriptive-content flex-row min-width-blurb'>
                            <h4 className='margin-top'>Growth: </h4>
                            <p className='margin-left'> {growth}%</p>
                        </div>
                        <div className='blurb-wrapper descriptive-content flex-row min-width-blurb'>
                            <h4 className='margin-top'>End: </h4>
                            <p className='margin-left'> ${currentFundFormat} </p>
                        </div>
                    </div>
                    <div>
                        <Link to='/lvl2-portfolio'>
                            <Button class='green-button no-left-margin' name='Return to Portfolio' handleClick={this.returnToPortfolio} />
                        </Link>
                        <Link to={investmentLink}>
                            <Button class='blue-button' name={name} handleClick={handleClick} />
                        </Link>
                    </div>
                </div>
            )
        }
        

        return (
            <div className="medium-viewport">
                {investmentReturnContent}    
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        portfolio: state.portfolio.portfolio,
        year: state.portfolio.year,
        previousFund: state.portfolio.previousFund,
        currentFund: state.portfolio.currentFund
    };
};

export default requiresLogin()(connect(mapStateToProps)(Lvl2InvestmentReturn));