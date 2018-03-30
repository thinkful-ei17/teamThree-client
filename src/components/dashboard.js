import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import Chart from './chart';
import Button from './button';
import MarketOutcomeDetail from './market-outcome-detail';
// import { hideLoginForm } from '../actions/users';
// import { hideRegistrationForm } from '../actions/users';

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
                <MarketOutcomeDetail year={this.props.year}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        year: {
            year: 1,
            riskTypes:[
                {mattress: {start:'5000', end:'5000', change: '0'}},
                {moderate: {start:'5000', end:'5200', change: '1.2'}},
                {conservative: {start:'5000', end:'5200', change: '1.2'}},
                {aggressive: {start:'5000', end:'5200', change: '1.2'}}
             ]
        }
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
