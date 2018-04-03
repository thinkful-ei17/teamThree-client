import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import requiresLogin from './requires-login';
import Button from './button';
import { fetchRiskOverview } from '../actions/portfolio';


export class MarketAnalysis extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchRiskOverview(this.props.year))
    }
    
    render () {    
        let growth;
        let selected;
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

        if (this.props.riskChoice === 'high') {
            growth = this.props.aggressive;
            selected = 'Aggressive';
        } else if (this.props.riskChoice === 'moderate') {
            growth = this.props.moderate;
            selected = 'Moderate';
        } else if (this.props.riskChoice === 'low') {
            growth = this.props.conservative;
            selected = 'Conservative';
        } else if (this.props.riskChoice === 'mattress') {
            growth = 0.0;
            selected = 'Mattress';
        }

        const handleClick = () => {
            console.log('This button links to InvestmentReturn');
        };

        return(
        <div>  
            <h2>Market Analysis: Year {this.props.year}</h2>
            
            <h3>Individual Overview</h3>
            <h4>Current Fund Value: {this.props.currentFund}</h4>
            <section>
                <p>Strategy:{selected}</p>
                <p>Growth: {growth}%</p>
                <p>Previous Fund Value: {this.props.previousFund}</p>
            </section>
            
            <h3>Market Recap</h3>
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
    year: state.portfolio.year
});

export default requiresLogin()(connect(mapStateToProps)(MarketAnalysis));