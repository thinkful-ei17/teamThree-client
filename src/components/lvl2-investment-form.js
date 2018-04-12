import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import requiresLogin from './requires-login';
import CompletedLevelOne from './completed-level-one';
import Button from './button';

import { fetchPortfolio, updateInvestmentStrategy, blankInvestmentStrategyEntry, investFundsLvl2, incrementYear } from '../actions/portfolio';

let numeral = require('numeral');

export class Lvl2InvestmentForm extends React.Component {
    componentDidMount() {
        if (this.props.portfolio === null) {
            this.props.dispatch(fetchPortfolio());
        }
    }

    invest = () => {
        let { unassigned, aggressive, moderate, conservative, mattress, google, autoZone, dollarTree, ea } = this.props;

        if (unassigned === 0){
            if (aggressive === '') {
                aggressive = '0';
            } if (moderate === '') {
                moderate = '0';
            } if (conservative === '') {
                conservative = '0';
            } if (mattress === '') {
                mattress = '0';
            } if (google === '') {
                google = '0';
            } if (autoZone === '') {
                autoZone = '0';
            } if (dollarTree === '') {
                dollarTree = '0';
            } if (ea === '') {
                ea = '0';
            }
            this.props.dispatch(investFundsLvl2(aggressive, moderate, conservative, mattress, google, autoZone, dollarTree, ea, this.props.year + 1, this.props.currentFund));
            this.props.dispatch(incrementYear());
        } else if (unassigned > 0) {
            alert('Not so fast. Assign your entire portfolio before continuing.')
        } else {
            alert("Unfortunately you can't invest money you don't have. Assign exactly 100% of your portfolio.")
        }
        
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

        let lvl2MarketAnalysis = '/lvl2-investment-form';

        if (unassigned === 0) {
            lvl2MarketAnalysis = '/lvl2-market-analysis';
        }

        const currentFundFormat = numeral(this.props.currentFund).format('0,0');

        return (
            <div className="small-viewport">
                <h2 className="primary-heading">Year {this.props.year + 1}</h2>

                <h3 className="secondary-heading primary-text-color margin-left-large">Current Fund: ${currentFundFormat}</h3>

                <h3 className="secondary-heading primary-text-color margin-bottom  margin-left-med">How would you like to invest this year?</h3>
                <h3 className="secondary-heading primary-text-color margin-bottom  margin-left-med">{unassigned}% Unassigned</h3>
                <fieldset className='investment-input-container no-border no-padding margin-bottom'>
                    <div className='margin-left-large'>
                        <div>
                            <input className='lvl2-investment-input' type='text' name='strategy' id='aggressive' value={aggressive} onChange={this.onChange.bind(this)} />
                            <label className="descriptive-content primary-text-color" htmlFor='aggressive'>Aggressive</label>
                        </div>
                        <div>
                            <input type='text' name='strategy' id='moderate' value={moderate} onChange={this.onChange.bind(this)} />
                            <label className="descriptive-content primary-text-color" htmlFor='moderate'>Moderate</label>
                        </div>
                        <div>
                            <input type='text' name='strategy' id='conservative' value={conservative} onChange={this.onChange.bind(this)} />
                            <label className="descriptive-content primary-text-color" htmlFor='conservative'>Conservative</label>
                        </div>
                        <div>
                            <input type='text' name='strategy' id='mattress' value={mattress} onChange={this.onChange.bind(this)} />
                            <label className="descriptive-content primary-text-color" htmlFor='mattress'>Mattress</label>
                        </div>
                        <div>
                            <input type='text' name='strategy' id='google' value={google} onChange={this.onChange.bind(this)} />
                            <label className="descriptive-content primary-text-color" htmlFor='google'>Google</label>
                        </div>
                        <div>
                            <input type='text' name='strategy' id='autoZone' value={autoZone} onChange={this.onChange.bind(this)} />
                            <label className="descriptive-content primary-text-color" htmlFor='autoZone'>AutoZone</label>
                        </div>
                        <div>
                            <input type='text' name='strategy' id='dollarTree' value={dollarTree} onChange={this.onChange.bind(this)} />
                            <label className="descriptive-content primary-text-color" htmlFor='dollarTree'>Dollar Tree</label>
                        </div>
                        <div>
                            <input type='text' name='strategy' id='ea' value={ea} onChange={this.onChange.bind(this)} />
                            <label className="descriptive-content primary-text-color" htmlFor='ea'>Electronic Arts</label>
                        </div>
                    </div>
                </fieldset>
                <div className='right-align-object'>
                    <Link to={lvl2MarketAnalysis}>
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