import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import requiresLogin from './requires-login';
import Chart from './chart';
import Button from './button';

import { fetchPortfolio } from '../actions/portfolio';

export class InvestmentReturn extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchPortfolio());
    }
    
    keepInvesting = () => {
        console.log('Keep Investing');
    }

    toFiveYearReview = () => {
        console.log('to Five Year Review was clicked');
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

        if (this.props.year === 5){
            investmentLink = '/five-year-market';
            name = 'See Five Year Review';
            handleClick = this.toFiveYearReview;
        } else{
            investmentLink = '/investment-form';
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

            if (portfolio[year-1]) {
                growth = portfolio[year-1].growth;
                strategy = portfolio[year-1].strategy;
            }
            
            investmentReturnContent = (
                <div>    
                    <h2 className='primary-heading'>Investment Returns: Year {year}</h2>
                    <Chart yMin={0} xMax={5} data={data} />
                    <h3 className='secondary-heading primary-text-color'>Investment Strategy Year {year}: {strategy}</h3>
                    <h3 className='secondary-heading primary-text-color'>Portfolio Review:</h3>
                    <div className="vector-wrapper">
                        <div className='blurb-wrapper secondary-heading'>Start: ${previousFund}</div>
                        <div className='blurb-wrapper secondary-heading'>Growth: {growth}%</div>
                        <div className='blurb-wrapper secondary-heading'>End: ${currentFund}</div>
                    </div>
                    <Link to='/portfolio'>
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

export default requiresLogin()(connect(mapStateToProps)(InvestmentReturn));
