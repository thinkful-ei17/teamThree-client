import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import Button from './button';

export class InvestmentForm extends React.Component {
    // componentDidMount() {
    //     this.props.dispatch(fetchPortfolio());
    // }

    invest = () => {
        console.log('Invest');
    }
    
    render() {

        return (
            <div className="investment-return-container">
                Year {this.props.year}
                
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