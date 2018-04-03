import React from "react";
import { connect } from "react-redux";
//import { Link, Redirect } from "react-router-dom";
//import Button from "./button";
import './five-year-market.css';

export function FiveYearMarket(props) {
  return (
    //line graph
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
      {/* {Button} */}
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(FiveYearMarket);
