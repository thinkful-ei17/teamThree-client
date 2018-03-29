import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import Chart from './chart';
import Button from './button';
import { fetchPortfolio } from '../actions/portfolio';


export class InvestmentReturn extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchPortfolio());
    }

    keepInvesting = () => {
        console.log('Keep Investing');
    }

    returnToPortfolio = () => {
        console.log('Return to Portfolio');
    }

    render() {
        return (
            <div className="investment-return-container">

                <Chart />
                <Button name='Return to Portfolio' handleClick={this.returnToPortfolio} />
                <Button name='Keep Investing' handleClick={this.keepInvesting} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));