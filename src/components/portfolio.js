import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
 import requiresLogin from './requires-login';
import Chart from './chart';
import Button from './button';
import YearSummaryList from './year-summary-list';

import { fetchPortfolio } from '../actions/portfolio';

export class Portfolio extends React.Component {    
    componentDidMount() {
        this.props.dispatch(fetchPortfolio());
    }
    
    toInvestmentData = () => {
        console.log('Links to InvestmentData');
    };

    toInvestmentForm = () => {
        console.log('Links to InvestmentForm')
    };

    toFiveYearReview = () => {
        console.log('to Five Year Review was clicked');
    }

    render() {
        let portfolioContent,
            investmentLink,
            name,
            handleClick;

        if (this.props.year === 5) {
            investmentLink = '/five-year-market';
            name = 'See Five Year Review';
            handleClick = this.toFiveYearReview;
        } else {
            investmentLink = '/investment-form';
            name = 'Keep Investing!';
            handleClick = this.toInvestmentForm;
        }
        if (this.props.data) {
            const data = [
                {									
                    color: '#C24275', 
                    points: this.props.data
                }
            ];
            portfolioContent = (
                <div>
                    <h3 className='secondary-heading primary-text-color'>Current Worth: {this.props.currentFund}</h3>
                    <section>
                        <YearSummaryList />
                        <Chart yMin={0} xMax={5} data={data} />
                    </section>
                </div>
            )
        }

        return (
            <div className='viewport'> 
            <h2 className='primary-heading'>Your Investment Portfolio</h2>
            {portfolioContent}
            <Link to='/market-analysis' >
                <Button class='green-button' name='Review Investment Data' handleClick={this.toInvestmentData}/>
            </Link>
            <Link to={investmentLink}>
                <Button class='blue-button' name={name} handleClick={handleClick}/> 
            </Link>
            </div> 
        );
    }  
}

const mapStateToProps = (state, props) => ({
    currentFund: state.portfolio.currentFund,
    data: state.portfolio.portfolio,
    year: state.portfolio.year
});

export default requiresLogin()(connect(mapStateToProps)(Portfolio));
