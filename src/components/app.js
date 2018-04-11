import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

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
import FiveYearMarket from './five-year-market';
import FiveYearPersonal from './five-year-personal';
import CompletedLevelOne from './completed-level-one';
import Lvl2Portfolio from './lvl2-portfolio';
import Lvl2Introduction from './lvl2-introduction';
import Lvl2InvestmentForm from './lvl2-investment-form';
import Lvl2MarketAnalysis from './lvl2-market-analysis';
import Lvl2InvestmentReturn from './lvl2-investment-return';
import Lvl2FiveYearMarket from './lvl2-five-year-market';
import TenYearPersonal from './ten-year-personal';
import Footer from './footer';

import { refreshAuthToken } from '../actions/auth';
import { fetchPortfolio } from '../actions/portfolio';

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

                <Route exact path="/five-year-market" component={FiveYearMarket}/>
                <Route exact path="/five-year-personal" component={FiveYearPersonal}/>
                <Route exact path="/completed-level-one" component={CompletedLevelOne}/>
                
                <Route exact path="/lvl2-portfolio" component={Lvl2Portfolio} />
               
                <Route exact path="/lvl2-introduction" component={Lvl2Introduction}/>

                <Route exact path="/lvl2-investment-form" component={Lvl2InvestmentForm}/>
                <Route exact path="/lvl2-market-analysis" component={Lvl2MarketAnalysis}/>
                <Route exact path="/lvl2-investment-return" component={Lvl2InvestmentReturn}/>

                <Route exact path="/lvl2-five-year-market" component={Lvl2FiveYearMarket}/>
                <Route exact path="/ten-year-personal" component={TenYearPersonal}/>

                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));