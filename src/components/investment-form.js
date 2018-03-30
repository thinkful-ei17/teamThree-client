import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import Button from './button';
import { chooseRiskTolerance } from '../actions/portfolio';

export class InvestmentForm extends React.Component {
    // componentDidMount() {
    //     this.props.dispatch(fetchPortfolio());
    // }

    invest = () => {
        console.log(this.props.riskChoice);
    }

    onChange = event => {
        this.props.dispatch(chooseRiskTolerance(event.target.value));
    }

    render() {

        return (
            <div className="investment-return-container">
                Year {this.props.year}
                <input type='radio' name='strategy' id='rb1' value='high' onChange={this.onChange.bind(this)} />
                <label htmlFor='rb1'>Aggressive</label>
                <input type='radio' name='strategy' id='rb2' value='moderate' onChange={this.onChange.bind(this)} />
                <label htmlFor='rb1'>Moderate</label>
                <input type='radio' name='strategy' id='rb3' value='low' onChange={this.onChange.bind(this)} />
                <label htmlFor='rb1'>Conservative</label>
                <input type='radio' name='strategy' id='rb4' value='mattress' onChange={this.onChange.bind(this)} />
                <label htmlFor='rb1'>Under Your Mattress</label>
                
                <Button name='Invest' handleClick={this.invest} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        year: 1,
        riskChoice: state.portfolio.riskChoice
    };
};

export default requiresLogin()(connect(mapStateToProps)(InvestmentForm));