import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from './button';
import requiresLogin from './requires-login';

import { fetchPortfolio, fetchRiskOverview } from '../actions/portfolio';


export class Lvl2MarketAnalysis extends React.Component {
    componentDidMount() {
        if (this.props.year) {
            this.props.dispatch(fetchRiskOverview(this.props.year));
        } else {
            Promise.resolve(this.props.dispatch(fetchPortfolio()))
            .then(() => {
                return this.props.dispatch(fetchRiskOverview(this.props.year));
            })
        }
    }
    
    render () {    
        
        let marketRecap;
        
        if(this.props.risks !== null) {
    
          marketRecap = (
            <section className='vector-wrapper'>
              <p className='blurb-wrapper'>Aggressive: {this.props.risks[0].gain}%</p>
              <p className='blurb-wrapper'>Moderate: {this.props.risks[2].gain}%</p>
              <p className='blurb-wrapper'>Conservative: {this.props.risks[1].gain}%</p>
              <p className='blurb-wrapper'>Mattress: 0.0%</p>
            </section> 
          );
        }

        const handleClick = () => {
            console.log('This button links to InvestmentReturn');
        };

        return(
        <div className='viewport'>  
            <h2 className='primary-heading'>Market Analysis: Year {this.props.year}</h2>
            <h3 className='secondary-heading primary-text-color'>Annual Percent Growth</h3>
            {marketRecap}
            <Link to='/lvl2-investment-return'>
                <Button class='blue-button' name="View Portfolio" handleClick={handleClick}/>
            </Link>
        </div>  
        );
    }
}

const mapStateToProps = (state, props) => ({
    risks: state.portfolio.risks,
    riskChoice: state.portfolio.riskChoice,
    previousFund: state.portfolio.previousFund,
    currentFund: state.portfolio.currentFund,
    year: state.portfolio.year,
    loading: state.portfolio.loading
});

export default requiresLogin()(connect(mapStateToProps)(Lvl2MarketAnalysis));