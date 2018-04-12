import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import requiresLogin from './requires-login';
import Chart from './chart';
import Button from './button';

import { fetchPortfolio } from '../actions/portfolio';

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
            name = 'See Level 2 Review';
            handleClick = this.toLvl2FiveYearReview;
        } else{
            investmentLink = '/lvl2-investment-form';
            name = 'Keep Investing!';
            handleClick = this.keepInvesting;
        }

        if (portfolio) {
            const data = [
                {									
                    points: portfolio,
                    color: '#C24275'
                }
            ];
            let growth,
                strategy;

            if (portfolio[year]) {
                growth = portfolio[year].growth;
                strategy = portfolio[year].strategy;
            }
            
            investmentReturnContent = (
                <div>    
                    <h2 className='primary-heading'>Investment Returns: Year {year}</h2>
                    <Chart yMin={0} xMax={10} data={data} />
                    <h3 className='secondary-heading primary-text-color'>Investment Strategy Year {year}</h3>
                    <h3 className='secondary-heading primary-text-color'>Portfolio Review:</h3>
                    <div className="vector-wrapper">
                        <div className='blurb-wrapper secondary-heading'>Start: ${previousFund}</div>
                        <div className='blurb-wrapper secondary-heading'>Growth: {growth}%</div>
                        <div className='blurb-wrapper secondary-heading'>End: ${currentFund}</div>
                    </div>
                    <Link to='/lvl2-portfolio'>
                        <Button class='green-button' name='Return to Portfolio' handleClick={this.returnToPortfolio} />
                    </Link>
                    <Link to={investmentLink}>
                        <Button class='blue-button' name={name} handleClick={handleClick} />
                    </Link>
                </div>
            )
        }
        

        return (
            <div className="viewport">
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