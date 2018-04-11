import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import requiresLogin from './requires-login';
import CompletedLevelOne from './completed-level-one';
import Button from './button';

import { fetchPortfolio, updateInvestmentStrategy, blankInvestmentStrategyEntry, investFunds, incrementYear } from '../actions/portfolio';

export class Lvl2InvestmentForm extends React.Component {
    componentDidMount() {

        if (this.props.portfolio === null) {
            this.props.dispatch(fetchPortfolio());
        }
    }

    invest = () => {
        this.props.dispatch(investFunds(this.props.riskChoice, this.props.year + 1, this.props.currentFund));
        this.props.dispatch(incrementYear());
    }

    onChange = event => {
        console.log(parseInt(event.target.value, 10))
        if (event.target.value === '') {
            this.props.dispatch(blankInvestmentStrategyEntry(event.target.id))
        } else if (isNaN(this.strictParseIntCheck(event.target.value))) {
            alert('Invalid Entry. You can only input numbers.');
        } else {
            this.props.dispatch(updateInvestmentStrategy(event.target.id, event.target.value));
        }
    }

    strictParseIntCheck = value => {
        if (/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/
          .test(value))
          return Number(value);
      return NaN;
    }

    render() {

        const { unassigned, aggressive } = this.props;

        return (
            <div className="small-viewport">
                <h2 className="primary-heading">Year {this.props.year + 1}</h2>
                <h3 className="secondary-heading primary-text-color">Current Fund: ${this.props.currentFund}</h3>
                <h3 className="secondary-heading primary-text-color">How would you like to invest this year?</h3>
                <h4>{unassigned}% UNASSIGNED</h4>
                <div className='investment-input-container'>
                    <label className="descriptive-content primary-text-color" htmlFor='aggressive'>Aggressive
                        <input type='text' name='strategy' id='aggressive' value={aggressive} onChange={this.onChange.bind(this)} />
                    </label>
                    <label className="descriptive-content primary-text-color radio-button-label" htmlFor='rb2'>Moderate
                        <input className='native-button' type='radio' name='strategy' id='rb2' value='Moderate' onChange={this.onChange.bind(this)} />
                        <span className='custom-radio-button'></span>
                    </label>
                    <label className="descriptive-content primary-text-color radio-button-label" htmlFor='rb3'>Conservative
                        <input className='native-button' type='radio' name='strategy' id='rb3' value='Conservative' onChange={this.onChange.bind(this)} />
                        <span className='custom-radio-button'></span>
                    </label>
                    <label className="descriptive-content primary-text-color radio-button-label" htmlFor='rb4'>Under Your Mattress
                        <input className='native-button' type='radio' name='strategy' id='rb4' value='Mattress' onChange={this.onChange.bind(this)} />
                        <span className='custom-radio-button'></span>
                    </label>
                </div>
                <div className='center-object'>
                    <Link to='/lvl2-market-analysis'>
                        <Button class='blue-button' name='Invest' handleClick={this.invest} />
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
        riskChoice: state.portfolio.riskChoice,
        portfolio: state.portfolio.portfolio,
        unassigned: state.portfolio.unassigned,
        aggressive: state.portfolio.aggressive
    };
};

export default requiresLogin()(connect(mapStateToProps)(Lvl2InvestmentForm));