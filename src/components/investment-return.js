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

            if (portfolio[year]) {
                growth = portfolio[year].growth;
                strategy = portfolio[year].strategy;
            }
            
            investmentReturnContent = (
                <div>    
                    <h2 className='primary-heading'>Investment Returns: Year {year}</h2>
                    <Chart yMin={0} xMax={5} data={data} />
                    <h3 className='secondary-heading primary-text-color'>Investment Strategy Year {year}: {strategy}</h3>
                    <h3 className='secondary-heading primary-text-color'>Portfolio Review:</h3>
                    
                    <div className="vector-wrapper flex-start margin-left">
                        <div className='blurb-wrapper descriptive-content flex-row min-width-blurb'>
                            <h4 className='margin-top'>Start: </h4>
                            <p className='margin-left'> ${previousFund}</p>
                        </div>
                        <div className='blurb-wrapper descriptive-content flex-row min-width-blurb'>
                            <h4 className='margin-top'>Growth: </h4>
                            <p className='margin-left'> {growth}%</p>
                        </div>
                        <div className='blurb-wrapper descriptive-content flex-row min-width-blurb'>
                            <h4 className='margin-top'>End: </h4>
                            <p className='margin-left'> ${currentFund} </p>
                        </div>
                    </div>
                    <div>
                        <Link to='/portfolio'>
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
