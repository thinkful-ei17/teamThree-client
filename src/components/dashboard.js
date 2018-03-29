import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import Chart from './chart';
import Button from './button';
import RiskDetail from './risk-detail';
import {hideLoginForm} from '../actions/users';
import {hideRegistrationForm} from '../actions/users';

export class Dashboard extends React.Component {
    // componentDidMount() {
    //     this.props.dispatch(hideLoginForm());
    //     this.props.dispatch(hideRegistrationForm());
    // }
  
    handleClick = () => {
        console.log('The button was clicked');
    }

    render() {
        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                <div className="dashboard-name">Name: {this.props.name}</div>
                <RiskDetail riskType='Conservative' stocks='20' bonds='80'/>
                <RiskDetail riskType='Moderate' stocks='50' bonds='50'/>
                <RiskDetail riskType='Aggressive' stocks='80' bonds='20'/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
