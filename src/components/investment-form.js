import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import requiresLogin from './requires-login';
import Button from './button';

import { chooseRiskTolerance, investFunds, incrementYear } from '../actions/portfolio';

export class InvestmentForm extends React.Component {

    invest = () => {
        this.props.dispatch(investFunds(this.props.riskChoice, this.props.year + 1, this.props.currentFund));
        this.props.dispatch(incrementYear());
    }

    onChange = event => {
        this.props.dispatch(chooseRiskTolerance(event.target.value));
    }

    render() {

        return (
            <div className="investment-return-container">
                <h1 className="app-h1-text">Year {this.props.year + 1}</h1>
                <h3 className="app-h3-text">Current Fund: {this.props.currentFund}</h3>
                    <input type='radio' name='strategy' id='rb1' value='high' onChange={this.onChange.bind(this)} />
                    <label className="app-label" htmlFor='rb1'>Aggressive</label>
                    <input type='radio' name='strategy' id='rb2' value='moderate' onChange={this.onChange.bind(this)} />
                    <label className="app-label" htmlFor='rb1'>Moderate</label>
                    <input type='radio' name='strategy' id='rb3' value='low' onChange={this.onChange.bind(this)} />
                    <label className="app-label" htmlFor='rb1'>Conservative</label>
                    <input type='radio' name='strategy' id='rb4' value='mattress' onChange={this.onChange.bind(this)} />
                    <label className="app-label" htmlFor='rb1'>Under Your Mattress</label>
                  <div>
                    <Link to='/market-analysis'>
                        <Button name='Invest' handleClick={this.invest} />
                    </Link>   
                  </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        year: state.portfolio.year,
        currentFund: state.portfolio.currentFund,
        riskChoice: state.portfolio.riskChoice
    };
};

export default requiresLogin()(connect(mapStateToProps)(InvestmentForm));