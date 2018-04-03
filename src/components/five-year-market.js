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
      this.props.dispatch(fetchRiskMarket('mattress'));
      // this.props.dispatch(fetchRiskMarket('low'));
      // this.props.dispatch(fetchRiskMarket('moderate'));
      // this.props.dispatch(fetchRiskMarket('high'));
  };
    //line graph
    render() {
      if(this.props.marketData === null) {
        
      }
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
                Balance: {this.props.marketData[0]}
              </li>
              <li>
                {/* change: {props.risk} */}
                YoY % change: idk
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
                YoY % change: idk
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
                YoY % change: idk
              </li>
              <li>
                {/* Start: {props.risk} */}
                Balance: 
              </li>
              <h3>Aggressive</h3>
              <li>
                {/* Start: {props.risk} */}
                Balance: 
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
            <div className="market-blurb-wrapper market-blurb-one year-two">
              <h3 className="year-title">Year 2</h3>
              <h3>Mattress</h3>
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
                YoY % change: idk
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
                YoY % change: idk
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
                YoY % change: idk
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
  console.log('what is in state marketData', state.market);
    if(state.market.marketData === null){
    console.log('do nothing');
  }
  else{
  console.log('test', state.market.marketData[1].gain);
  // for(let i = 0; i < state.market.marketData.length; i++){
  //   for(let prop in state.market.marketData[i]){
  //     console.log('test 2', prop);
  //   }
  // }
  }
  return{
    marketData: state.market,
  };
};

export default /*requiresLogin()*/(connect(mapStateToProps)(FiveYearMarket));
