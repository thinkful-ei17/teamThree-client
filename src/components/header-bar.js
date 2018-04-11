import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { login } from '../actions/auth';
import { clearAuth } from '../actions/auth';
import { showLoginForm } from '../actions/users';
import { showRegistrationForm } from '../actions/users';
import { clearAuthToken } from '../local-storage';

export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }
    onSubmit(obj) {
        //console.log(obj);
        return this.props.dispatch(login(obj.username, obj.password));
    }

    render() {
        // Only render the log out button if we are logged in
        let /*currentUsername,*/
            logOutButton,
            loginFormNav,
            regFormNav,
            portfolio,
            demo,
            investmentData;

        let appName = (
            <li className="appname"><span>Cents</span>ible.</li>
        );

        if (this.props.loggedIn) {

            logOutButton = (
                <li className="red btn-logout" onClick={() => this.logOut()}>
                    <Link to='/market-analysis'>Log Out</Link>
                </li>
            );
        }

        if(this.props.year && this.props.loggedIn) {
          //console.log('NavBar - year = ', this.props.year)
          investmentData = (
            <li><Link to='/market-analysis'>Investment Data</Link></li>
          );
          portfolio = (
            <li><Link to='/portfolio'>Portfolio</Link></li>
          ); 
        }

        if (!this.props.loggedIn) {
            loginFormNav = (
                <li className="login-text" href="#" onClick={() => this.props.dispatch(showLoginForm())} >Login</li>
            );
            regFormNav = (
                <li className="login-text" href="#" onClick={() => this.props.dispatch(showRegistrationForm())}>Sign Up</li>
            );
            demo = (
                <li className="demo" onClick={() => this.onSubmit({username:'Demo1',password:'blahblahdemo1'})}>Demo Account</li>
            );
        }

        // if (this.props.loggedIn && this.props.level === 1) {
        //     currentUsername = (
        //         <li className="current-user">Logged in as <span className="user-span">{this.props.currentUser.username}</span></li>
        //     );

        //     logOutButton = (
        //         <button className="red btn-logout" onClick={() => this.logOut()}>Log out</button>
        //     );

        //     appName = (
        //         <li className="appname">App Name</li>
        //     );

        //     portfolio = (
        //         <button className="portfolio" onClick={() => <Route exact path="/portfolio" component={portfoliothingy} />}>Portfolio</button>
        //     );

        //     investmentData = (
        //         <button className="investment" onClick={() => <Route exact path="/investments" component={investment} />}>Investment Information</button>
        //     );
        // }
        return (
            <div className="header-bar">
                <ul className="nav-bar-ul">
                    {appName}
                    {demo}
                    {loginFormNav}
                    {regFormNav}
                    
                    {portfolio}
                    {investmentData}
                    {logOutButton}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    ShowLoginForm: state.userReducer.showLoginForm,
    ShowRegistrationForm: state.userReducer.showForm,
    currentUser: state.auth.currentUser,
    year: state.portfolio.year
});

export default connect(mapStateToProps)(HeaderBar);
