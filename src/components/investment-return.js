import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import Chart from './chart';
import Button from './button';
import { fetchPortfolio } from '../actions/portfolio';


export class InvestmentReturn extends React.Component {
    // componentDidMount() {
    //     this.props.dispatch(fetchPortfolio());
    // }

    keepInvesting = () => {
        console.log('Keep Investing');
    }

    returnToPortfolio = () => {
        console.log('Return to Portfolio');
    }

    render() {
        this.props.data[0].color = 'black';

        return (
            <div className="investment-return-container">
                <Chart yMin={0} xMax={5} data={this.props.data} />
                <Button name='Return to Portfolio' handleClick={this.returnToPortfolio} />
                <Button name='Keep Investing' handleClick={this.keepInvesting} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: [
                {									
                    points: [{x: 0, y: 5000}, {x: 1, y: 7000}, {x: 2, y: 8000}, {x: 3, y: 4000}, {x: 4, y: 6000}] 
                // } ,
                // {
                //     points: [{x: 0, y: 1000}, {x: 1, y: 2000}, {x: 2, y: 4000}, {x: 3, y: 8000}, {x: 4, y: 6000}] 
                }
            ]
    };
};

export default requiresLogin()(connect(mapStateToProps)(InvestmentReturn));