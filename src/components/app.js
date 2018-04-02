import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { refreshAuthToken } from '../actions/auth';

import HeaderBar from './header-bar';
import LandingPage from './landing-page';
import RegistrationPage from './registration-page';

import Dashboard from './dashboard';
import IntroductionPage from './introduction-page';

import Portfolio from './portfolio';
import RiskBreakdown from './risk-breakdown';
import InvestmentForm from './investment-form';
import MarketAnalysis from './market-analysis';
import InvestmentReturn from './investment-return';
// import FiveYearMarket from './five-year-market';
// import FiveYearPersonal from './five-year-personal';



export class App extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.loggedIn && this.props.loggedIn) {
            // When we are logged in, refresh the auth token periodically
            this.startPeriodicRefresh();
        } else if (prevProps.loggedIn && !this.props.loggedIn) {
            // Stop refreshing when we log out
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }

    render() {
        return (
            <div className="app">
                <HeaderBar />
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/register" component={RegistrationPage} />

                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/portfolio" component={Portfolio} />
               
                <Route exact path="/introduction" component={IntroductionPage}/>
                <Route exact path="/risk-breakdown" component={RiskBreakdown}/>

                <Route exact path="/investment-form" component={InvestmentForm}/>
                <Route exact path="/market-analysis" component={MarketAnalysis}/>
                <Route exact path="/investment-return" component={InvestmentReturn}/>

                {/* <Route exact path="/five-year-market" component={FiveYearMarket}/> */}
                {/* <Route exact path="/five-year-personal" component={FiveYearPersonal}/> */}

            </div>
        );
    }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));

//LINDA - comment out to get stuff to work