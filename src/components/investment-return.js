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

        if (this.props.data) {
            const data = [
                {									
                    color: '#C24275',
                    points: this.props.data
                }
            ];
            investmentReturnContent = (
                <div>    
                    <Chart yMin={0} xMax={5} data={data} />
                    <Link to='/portfolio'>
                        <Button name='Return to Portfolio' handleClick={this.returnToPortfolio} />
                    </Link>
                    <Link to={investmentLink}>
                        <Button name={name} handleClick={handleClick} />
                    </Link>
                </div>
            )
        }
        

        return (
            <div className="investment-return-container">
                {investmentReturnContent}    
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.portfolio.portfolio,
        year: state.portfolio.year
    };
};

export default requiresLogin()(connect(mapStateToProps)(InvestmentReturn));
