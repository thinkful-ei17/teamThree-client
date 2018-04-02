import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import {Link} from 'react-router-dom';
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
        let investmentReturnContent = 'Loading...';
        if (this.props.data) {
            const data = [
                {									
                    color: 'steelblue', 
                    name: 'Sample Portfolio',
                    points: this.props.data
                }
            ];
            investmentReturnContent = (
                <div>    
                    <Chart yMin={0} xMax={5} data={data} />
                    <Link to='/portfolio'>
                        <Button name='Return to Portfolio' handleClick={this.returnToPortfolio} />
                    </Link>
                    <Link to='/investment-form'>
                        <Button name='Keep Investing' handleClick={this.keepInvesting} />
                    </Link>
                </div>
            )
        }
        

        return (
            <div className="investment-return-container">
                {investmentReturnContent}    
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.portfolio.portfolio
    };
};

export default requiresLogin()(connect(mapStateToProps)(InvestmentReturn));