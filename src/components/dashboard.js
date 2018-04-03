import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { Route, withRouter } from 'react-router-dom';

import {hideLoginForm} from '../actions/users';
import {hideRegistrationForm} from '../actions/users';
<<<<<<< HEAD
import MarketAnalysis from './market-analysis';
import InvestmentForm from './investment-form';
import InvestmentReturn from './investment-return';
=======
import IntroductionPage from './introduction-page';
import Portfolio from './portfolio';

>>>>>>> 6fa666a9bed782fd5546f95d71c2ec35cbc90185

export class Dashboard extends React.Component {
    // componentDidMount() {
    //     this.props.dispatch(hideLoginForm());
    //     this.props.dispatch(hideRegistrationForm());
    // }

    render() {
        let dashboardComponent;

        if(!this.props.introComplete){
           dashboardComponent =  <IntroductionPage/>
        }else{
            dashboardComponent = <Portfolio/>
        }

        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                <div className="dashboard-name">Name: {this.props.name}</div>
<<<<<<< HEAD
                <InvestmentForm />
                <InvestmentReturn />
                <MarketAnalysis />
=======
                {dashboardComponent}
>>>>>>> 6fa666a9bed782fd5546f95d71c2ec35cbc90185
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        introComplete: state.introReducer.introComplete
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
