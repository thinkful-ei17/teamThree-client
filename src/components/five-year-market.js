import React from "react";
import { connect } from "react-redux";
//import requiresLogin from './requires-login';
import { Link } from "react-router-dom";
import Button from "./button";
import { fetchRiskMarket } from '../actions/five-year-market';
import './five-year-market.css';

export class FiveYearMarket extends React.Component {
  componentWillMount() {
    console.log('hello from will mount five year mkt');
      this.props.dispatch(fetchRiskMarket());
  };
    //line graph
    render() {
      return (
        <div className="market-view">
          <h1>Five Year Market Summary:</h1>
          {/* {Chart} */}
          <h2> Investment Outcome by Year:</h2>
          <section className="market-vector-wrapper risk-mattress">
            <div className="market-blurb-wrapper market-blurb-one year-one">
              <h3 className="year-title">Year 1</h3>
              <h3>Mattress</h3>
              <li>
                {/* Start: {props.risk} */}
                Balance: {this.props.marketData}
              </li>
              <li>
                {/* change: {props.risk} */}
                YoY % change: {this.props.marketDataGainOne}
              </li>
              <li>
                {/* change: {props.risk} */}
                YoY $ change: idk
              </li>
              <h3>Conservative</h3>
              <li>
                {/* Start: {props.risk} */}
                Balance: 
              </li>
              <li>
                {/* change: {props.risk} */}
                YoY % change: {/*this.props.marketDataGainTwo*/}
              </li>
              <li>
                {/* change: {props.risk} */}
                YoY $ change: idk
              </li>
              <h3>Moderate</h3>
              <li>
                {/* Start: {props.risk} */}
                Balance: 
              </li>
              <li>
                {/* change: {props.risk} */}
                YoY % change: {/*this.props.marketDataGainThree*/}
              </li>
              <li>
                {/* Start: {props.risk} */}
                YoY $ change: 
              </li>
              <h3>Aggressive</h3>
              <li>
                {/* Start: {props.risk} */}
                Balance: 
              </li>
              <li>
                {/* change: {props.risk} */}
                YoY % change: {/*this.props.marketDataGainFour*/}
              </li>
              <li>
                {/* change: {props.risk} */}
                YoY $ change: idk
              </li>
            </div>
            <div className="market-blurb-wrapper market-blurb-one year-two">
              <h3 className="year-title">Year 2</h3>
              <h3>Mattress</h3>
              <li>
                {/* Start: {props.risk} */}
                Balance: $5,000
              </li>
              <li>
                {/* change: {props.risk} */}
                YoY % change: {this.props.marketDataGainTwo}
              </li>
              <li>
                {/* change: {props.risk} */}
                YoY $ change: idk
              </li>
              <h3>Conservative</h3>
              <li>
                {/* Start: {props.risk} */}
                Balance: $5,000
              </li>
              <li>
                {/* change: {props.risk} */}
                YoY % change: idk
              </li>
              <li>
                {/* change: {props.risk} */}
                YoY $ change: idk
              </li>
              <h3>Moderate</h3>
              <li>
                {/* Start: {props.risk} */}
                Balance: $5,000
              </li>
              <li>
                {/* change: {props.risk} */}
                YoY % change: idk
              </li>
              <li>
                {/* change: {props.risk} */}
                YoY $ change: idk
              </li>
              <h3>Aggressive</h3>
              <li>
                {/* Start: {props.risk} */}
                Balance: $5,000
              </li>
              <li>
                {/* change: {props.risk} */}
                YoY % change: idk
              </li>
              <li>
                {/* change: {props.risk} */}
                YoY $ change: idk
              </li>
            </div>
            <div className="market-blurb-wrapper market-blurb-one year-three">
              <h3 className="year-title">Year 3</h3>
              <h3>Mattress</h3>
              <li>
                {/* Start: {props.risk} */}
                Balance: $5,000
              </li>
              <li>
                {/* change: {props.risk} */}
                YoY % change: {this.props.marketDataGainThree}
              </li>
              <li>
                {/* change: {props.risk} */}
                YoY $ change: idk
              </li>
              <h3>Conservative</h3>
              <li>
                {/* Start: {props.risk} */}
                Balance: $5,000
              </li>
              <li>
                {/* change: {props.risk} */}
                YoY % change: idk
              </li>
              <li>
                {/* change: {props.risk} */}
                YoY $ change: idk
              </li>
              <h3>Moderate</h3>
              <li>
                {/* Start: {props.risk} */}
                Balance: $5,000
              </li>
              <li>
                {/* change: {props.risk} */}
                YoY % change: idk
              </li>
              <li>
                {/* change: {props.risk} */}
                YoY $ change: idk
              </li>
              <h3>Aggressive</h3>
              <li>
                {/* Start: {props.risk} */}
                Balance: $5,000
              </li>
              <li>
                {/* change: {props.risk} */}
                YoY % change: idk
              </li>
              <li>
                {/* change: {props.risk} */}
                YoY $ change: idk
              </li>
            </div>
            <div className="market-blurb-wrapper market-blurb-one year-four">
              <h3 className="year-title">Year 4</h3>
              <h3>Mattress</h3>
              <li>
                {/* Start: {props.risk} */}
                Balance: $5,000
              </li>
              <li>
                {/* change: {props.risk} */}
                YoY % change: {this.props.marketDataGainFour}
              </li>
              <li>
                {/* change: {props.risk} */}
                YoY $ change: idk
              </li>
              <h3>Conservative</h3>
              <li>
                {/* Start: {props.risk} */}
                Balance: $5,000
              </li>
              <li>
                {/* change: {props.risk} */}
                YoY % change: idk
              </li>
              <li>
                {/* change: {props.risk} */}
                YoY $ change: idk
              </li>
              <h3>Moderate</h3>
              <li>
                {/* Start: {props.risk} */}
                Balance: $5,000
              </li>
              <li>
                {/* change: {props.risk} */}
                YoY % change: idk
              </li>
              <li>
                {/* change: {props.risk} */}
                YoY $ change: idk
              </li>
              <h3>Aggressive</h3>
              <li>
                {/* Start: {props.risk} */}
                Balance: $5,000
              </li>
              <li>
                {/* change: {props.risk} */}
                YoY % change: idk
              </li>
              <li>
                {/* change: {props.risk} */}
                YoY $ change: idk
              </li>
            </div>
            <div className="market-blurb-wrapper market-blurb-one year-five">
              <h3 className="year-title">Year 5</h3>
              <h3>Mattress</h3>
              <li>
                {/* Start: {props.risk} */}
                Balance: $5,000
              </li>
              <li>
                {/* change: {props.risk} */}
                YoY % change: {this.props.marketDataGainFive}
              </li>
              <li>
                {/* change: {props.risk} */}
                YoY $ change: idk
              </li>
              <h3>Conservative</h3>
              <li>
                {/* Start: {props.risk} */}
                Balance: $5,000
              </li>
              <li>
                {/* change: {props.risk} */}
                YoY % change: idk
              </li>
              <li>
                {/* change: {props.risk} */}
                YoY $ change: idk
              </li>
              <h3>Moderate</h3>
              <li>
                {/* Start: {props.risk} */}
                Balance: $5,000
              </li>
              <li>
                {/* change: {props.risk} */}
                YoY % change: idk
              </li>
              <li>
                {/* change: {props.risk} */}
                YoY $ change: idk
              </li>
              <h3>Aggressive</h3>
              <li>
                {/* Start: {props.risk} */}
                Balance: $5,000
              </li>
              <li>
                {/* change: {props.risk} */}
                YoY % change: idk
              </li>
              <li>
                {/* change: {props.risk} */}
                YoY $ change: idk
              </li>
            </div>
          </section>
          <Link to='/five-year-personal'>
              <Button name="Show Me Mine! " handleClick={ () => false} />
          </Link>
        </div>
      );
  }
}

const mapStateToProps = state => {
  if(state.marketReducer.marketData === null){ //ensure data mounted properly - prevents error prior to proper data state
    return {
      marketData: null,
    };
  }
  else{
    console.log('hi in state');
    console.log(state.marketReducer.marketData)
    return{
      marketDataGainOne: state.marketReducer.marketData[15].gain,
    };
  }
};

export default /*requiresLogin()*/(connect(mapStateToProps)(FiveYearMarket));
