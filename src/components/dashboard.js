import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import Chart from './chart';
import Button from './button';
import {hideLoginForm} from '../actions/users';
import {hideRegistrationForm} from '../actions/users';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(hideLoginForm());
        this.props.dispatch(hideRegistrationForm());

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
                <Chart />
                <Button name='Test' handleClick={this.handleClick}/>
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
