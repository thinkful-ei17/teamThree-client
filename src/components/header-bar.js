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
            <li className="appname header-li"><span>Cents</span>ible.</li>
        );

        if (this.props.loggedIn) {

            logOutButton = (
                <li  className="red btn-logout" onClick={() => this.logOut()}>
                    <Link to='/market-analysis' className='header-link'>Log Out</Link>
                </li>
            );
        }

        if(this.props.year && this.props.loggedIn) {
          //console.log('NavBar - year = ', this.props.year)
          investmentData = (
            <li className='header-li'><Link to='/market-analysis' className='header-link'>Investment Data</Link></li>
          );
          portfolio = (
            <li className='header-li'><Link to='/portfolio' className='header-link'>Portfolio</Link></li>
          );
          if (this.props.year > 5 || this.props.lvl2IntroComplete) {
            investmentData = (
                <li className='header-li'><Link to='/lvl2-market-analysis' className='header-link'>Investment Data</Link></li>
            );
            portfolio = (
                <li className='header-li'><Link to='/lvl2-portfolio' className='header-link'>Portfolio</Link></li>
            );
          }
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

        return (
            <div className="header-bar flex">
                <ul className="header-ul flex-row wrap">
                    {appName}
                    <div className='header-links'>
                    {demo}
                    {loginFormNav}
                    {regFormNav}
                    
                    {portfolio}
                    {investmentData}
                    {logOutButton}
                    </div>
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
    year: state.portfolio.year,
    lvl2IntroComplete: state.introReducer.lvl2IntroComplete
});

export default connect(mapStateToProps)(HeaderBar);
