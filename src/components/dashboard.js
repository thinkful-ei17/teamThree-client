import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import Chart from './chart';
import {hideLoginForm} from '../actions/users';
import {hideRegistrationForm} from '../actions/users';
import MarketAnalysis from './market-analysis';

export class Dashboard extends React.Component {
    // componentDidMount() {
    //     this.props.dispatch(hideLoginForm());
    //     this.props.dispatch(hideRegistrationForm());
    // }

    render() {
        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                <div className="dashboard-name">Name: {this.props.name}</div>
                <MarketAnalysis />
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
