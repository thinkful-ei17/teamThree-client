import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import requiresLogin from './requires-login';
import Button from './button';

import { fetchPortfolio, updateInvestmentStrategy, blankInvestmentStrategyEntry, investFundsLvl2, incrementYear } from '../actions/portfolio';

import './lvl2-investment-form.css';

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
        if (/^(-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/
          .test(value))
          return Number(value);
      return NaN;
    }

    render() {

        const { unassigned, aggressive, moderate, conservative, mattress, google, autoZone, dollarTree, ea } = this.props;

        let lvl2MarketAnalysis = '/lvl2-investment-form';
        let unassignedTextColor = 'graph-pink'

        if (unassigned === 0) {
            lvl2MarketAnalysis = '/lvl2-market-analysis';
            unassignedTextColor = 'accent-med-green'
        }

        const currentFundFormat = numeral(this.props.currentFund).format('0,0');

        return (
            <div className="medium-viewport">
                <h2 className="primary-heading">Year {this.props.year + 1}</h2>

                <h3 className="secondary-heading primary-text-color margin-left-large">Current Fund: ${currentFundFormat}</h3>

                <h3 className="secondary-heading primary-text-color margin-bottom  margin-left-med">How would you like to invest this year?</h3>
                <h3 className='secondary-heading primary-text-color margin-bottom margin-left-extra-large'><span className={unassignedTextColor}>{unassigned}%</span> Unassigned</h3>
                <fieldset className='investment-input-container no-border no-padding margin-bottom'>
                    <div className='margin-left-large flex justify-around'>
                        <div>
                            <div className='padding'>
                                <input className='lvl2-investment-input accent-med-green descriptive-content margin-right' type='text' name='strategy' id='aggressive' value={aggressive} onChange={this.onChange.bind(this)} />
                                <label className="descriptive-content primary-text-color margin-left" htmlFor='aggressive'>Aggressive</label>
                            </div>
                            <div className='padding'>
                                <input className='lvl2-investment-input accent-med-green descriptive-content margin-right' type='text' name='strategy' id='moderate' value={moderate} onChange={this.onChange.bind(this)} />
                                <label className="descriptive-content primary-text-color margin-left" htmlFor='moderate'>Moderate</label>
                            </div>
                            <div className='padding'>
                                <input className='lvl2-investment-input accent-med-green descriptive-content margin-right' type='text' name='strategy' id='conservative' value={conservative} onChange={this.onChange.bind(this)} />
                                <label className="descriptive-content primary-text-color margin-left" htmlFor='conservative'>Conservative</label>
                            </div>
                            <div className='padding'>
                                <input className='lvl2-investment-input accent-med-green descriptive-content margin-right' type='text' name='strategy' id='mattress' value={mattress} onChange={this.onChange.bind(this)} />
                                <label className="descriptive-content primary-text-color margin-left" htmlFor='mattress'>Mattress</label>
                            </div>
                        </div>
                        <div>
                            <div className='padding'>
                                <input className='lvl2-investment-input accent-med-green descriptive-content margin-right' type='text' name='strategy' id='google' value={google} onChange={this.onChange.bind(this)} />
                                <label className="descriptive-content primary-text-color margin-left" htmlFor='google'>Google</label>
                            </div>
                            <div className='padding'>
                                <input className='lvl2-investment-input accent-med-green descriptive-content margin-right' type='text' name='strategy' id='autoZone' value={autoZone} onChange={this.onChange.bind(this)} />
                                <label className="descriptive-content primary-text-color margin-left" htmlFor='autoZone'>AutoZone</label>
                            </div>
                            <div className='padding'>
                                <input className='lvl2-investment-input accent-med-green descriptive-content margin-right' type='text' name='strategy' id='dollarTree' value={dollarTree} onChange={this.onChange.bind(this)} />
                                <label className="descriptive-content primary-text-color margin-left" htmlFor='dollarTree'>Dollar Tree</label>
                            </div>
                            <div className='padding'>
                                <input className='lvl2-investment-input accent-med-green descriptive-content margin-right' type='text' name='strategy' id='ea' value={ea} onChange={this.onChange.bind(this)} />
                                <label className="descriptive-content primary-text-color margin-left" htmlFor='ea'>Electronic Arts</label>
                            </div>
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