import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import Button from './button';

export class InvestmentForm extends React.Component {
    // componentDidMount() {
    //     this.props.dispatch(fetchPortfolio());
    // }

    invest = () => {
        const risk = document.querySelector('input[name = "strategy"]:checked').value;
        console.log(risk);
    }

    render() {

        return (
            <div className="investment-return-container">
                Year {this.props.year}
                <input type='radio' name='strategy' id='rb1' value='high' />
                <label htmlFor='rb1'>Aggressive</label>
                <input type='radio' name='strategy' id='rb2' value='moderate' />
                <label htmlFor='rb1'>Moderate</label>
                <input type='radio' name='strategy' id='rb3' value='low' />
                <label htmlFor='rb1'>Conservative</label>
                <input type='radio' name='strategy' id='rb4' value='mattress' />
                <label htmlFor='rb1'>Under Your Mattress</label>
                
                <Button name='Invest' handleClick={this.invest} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        year: 1,
        
    };
};

export default requiresLogin()(connect(mapStateToProps)(InvestmentForm));