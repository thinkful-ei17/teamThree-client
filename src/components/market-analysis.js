import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import requiresLogin from './requires-login';
import Button from './button';
import { fetchRiskOverview } from '../actions/portfolio';


export class MarketAnalysis extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchRiskOverview(this.props.year))
    }
    
    render () {    
        let marketRecap;
        
        if(this.props.risks !== null) {
          marketRecap = (
            <section className='market-analysis-risks'>
              <p>Aggressive: {this.props.risks[0].gain}% change</p>
              <p>Moderate: {this.props.risks[2].gain}% change</p>
              <p>Conservative: {this.props.risks[1].gain}% change</p>
              <p>Mattress: 0.0% change</p>
            </section> 
          );
        }

        const handleClick = () => {
            console.log('This button links to InvestmentReturn');
        };

        return(
        <div>  
            <h2>Market Analysis: Year {this.props.year}</h2>
            {marketRecap}
            <Link to='/investment-return'>
                <Button name="View Portfolio" handleClick={handleClick}/>
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

export default requiresLogin()(connect(mapStateToProps)(MarketAnalysis));