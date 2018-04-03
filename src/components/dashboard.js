import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import requiresLogin from './requires-login';
import IntroductionPage from './introduction-page';
import Portfolio from './portfolio';

import { hideLoginForm } from '../actions/users';
import { hideRegistrationForm } from '../actions/users';

export class Dashboard extends React.Component {

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
                {dashboardComponent}
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
