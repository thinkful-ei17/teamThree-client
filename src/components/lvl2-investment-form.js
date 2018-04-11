import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import requiresLogin from './requires-login';
import CompletedLevelOne from './completed-level-one';
import Button from './button';

import { fetchPortfolio, updateInvestmentStrategy, blankInvestmentStrategyEntry, investFundsLvl2, incrementYear } from '../actions/portfolio';

export class Lvl2InvestmentForm extends React.Component {
    componentDidMount() {

        if (this.props.portfolio === null) {
            this.props.dispatch(fetchPortfolio());
        }
    }

    invest = () => {
        let { unassigned, aggressive, moderate, conservative, mattress, google, autoZone, dollarTree, ea } = this.props;
        this.props.dispatch(investFundsLvl2(aggressive, moderate, conservative, mattress, google, autoZone, dollarTree, ea , this.props.year + 1, this.props.currentFund));
        this.props.dispatch(incrementYear());
    }

    onChange = event => {
        if (event.target.value === '') {
            this.props.dispatch(blankInvestmentStrategyEntry(event.target.id))
        } else if (isNaN(this.strictParseIntCheck(event.target.value))) {
            alert('Invalid Entry. You can only input numbers.');
        } else if (parseInt(event.target.value, 10) < 0) {
            alert("Invalid Entry. You can't invest a negative percentage of your portfolio.")
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

        const { unassigned, aggressive, moderate, conservative, mattress, google, autoZone, dollarTree, ea } = this.props;

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
                    <label className="descriptive-content primary-text-color" htmlFor='moderate'>Moderate
                        <input type='text' name='strategy' id='moderate' value={moderate} onChange={this.onChange.bind(this)} />
                    </label>
                    <label className="descriptive-content primary-text-color" htmlFor='conservative'>Conservative
                        <input type='text' name='strategy' id='conservative' value={conservative} onChange={this.onChange.bind(this)} />
                    </label>
                    <label className="descriptive-content primary-text-color" htmlFor='mattress'>Mattress
                        <input type='text' name='strategy' id='mattress' value={mattress} onChange={this.onChange.bind(this)} />
                    </label>
                    <label className="descriptive-content primary-text-color" htmlFor='google'>Google
                        <input type='text' name='strategy' id='google' value={google} onChange={this.onChange.bind(this)} />
                    </label>
                    <label className="descriptive-content primary-text-color" htmlFor='autoZone'>AutoZone
                        <input type='text' name='strategy' id='autoZone' value={autoZone} onChange={this.onChange.bind(this)} />
                    </label>
                    <label className="descriptive-content primary-text-color" htmlFor='dollarTree'>Dollar Tree
                        <input type='text' name='strategy' id='dollarTree' value={dollarTree} onChange={this.onChange.bind(this)} />
                    </label>
                    <label className="descriptive-content primary-text-color" htmlFor='ea'>Electronic Arts
                        <input type='text' name='strategy' id='ea' value={ea} onChange={this.onChange.bind(this)} />
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
        aggressive: state.portfolio.aggressive,
        moderate: state.portfolio.moderate,
        conservative: state.portfolio.conservative,
        mattress: state.portfolio.mattress,
        google: state.portfolio.google,
        autoZone: state.portfolio.autoZone,
        dollarTree: state.portfolio.dollarTree,
        ea: state.portfolio.ea
    };
};

export default requiresLogin()(connect(mapStateToProps)(Lvl2InvestmentForm));