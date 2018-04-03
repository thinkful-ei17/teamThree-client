import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import Button from "./button";
import './marketview.css';

export function MarketView(props) {
  return (
    //line graph
    <div className="market-view">
      <h1>Five Year Market Summary:</h1>
      <h2> Investment Outcome by Year:</h2>
      <section className="market-vector-wrapper risk-mattress">
       <div id="year">
           <div className="table">
               <ul id="horizontal-list">
                    <li>Year 1</li>
                    <li>Year 2</li>
                    <li>Year 3 </li>
                    <li>Year 4 </li>
                    <li>Year 5 </li>
                </ul>
            </div>
        </div> 
      </section>
      <section className="market-vector-wrapper risk-mattress">
        <div className="market-blurb-wrapper market-blurb-one">
          <li>
            {/* Year 1: {props.risk} */}
            Start: $5,000 Change: idk
          </li>
        </div>
        <div className="market-blurb-wrapper market-blurb-two">
          <li>
            {/* Year 2: {props.risk} */}
            {/* Start: {props.currentfund} */}
            Change: idk
          </li>
        </div>
        <div className="market-blurb-wrapper market-blurb-three">
          <li>
            {/* Year 3: {props.risk} */}
            {/* Start: {props.currentfund} */}
            Change: idk
          </li>
        </div>
        <div className="market-blurb-wrapper market-blurb-four">
          <li>
            {/* Year 4: {props.risk} */}
            {/* Start: {props.currentfund} */}
            Change: idk
          </li>
        </div>
        <div className="market-blurb-wrapper market-blurb-five">
          <li>
            {/* Year 5: {props.risk} */}
            {/* Start: {props.currentfund} */}
            Change: idk
          </li>
        </div>
      </section>
      <section className="market-vector-wrapper risk-conservative">
        <div className="market-blurb-wrapper market-blurb-one">
          <li>
            {/* Year 1: {props.risk} */}
            Start: $5,000 Change: idk
          </li>
        </div>
        <div className="market-blurb-wrapper market-blurb-two">
          <li>
            {/* Year 2: {props.risk} */}
            {/* Start: {props.currentfund} */}
            Change: idk
          </li>
        </div>
        <div className="market-blurb-wrapper market-blurb-three">
          <li>
            {/* Year 3: {props.risk} */}
            {/* Start: {props.currentfund} */}
            Change: idk
          </li>
        </div>
        <div className="market-blurb-wrapper market-blurb-four">
          <li>
            {/* Year 4: {props.risk} */}
            {/* Start: {props.currentfund} */}
            Change: idk
          </li>
        </div>
        <div className="market-blurb-wrapper market-blurb-five">
          <li>
            {/* Year 5: {props.risk} */}
            {/* Start: {props.currentfund} */}
            Change: idk
          </li>
        </div>
      </section>
      <section className="market-vector-wrapper risk-moderate">
        <div className="market-blurb-wrapper market-blurb-one">
          <li>
            {/* Year 1: {props.risk} */}
            Start: $5,000 Change: idk
          </li>
        </div>
        <div className="market-blurb-wrapper market-blurb-two">
          <li>
            {/* Year 2: {props.risk} */}
            {/* Start: {props.currentfund} */}
            Change: idk
          </li>
        </div>
        <div className="market-blurb-wrapper market-blurb-three">
          <li>
            {/* Year 3: {props.risk} */}
            {/* Start: {props.currentfund} */}
            Change: idk
          </li>
        </div>
        <div className="market-blurb-wrapper market-blurb-four">
          <li>
            {/* Year 4: {props.risk} */}
            {/* Start: {props.currentfund} */}
            Change: idk
          </li>
        </div>
        <div className="market-blurb-wrapper market-blurb-five">
          <li>
            {/* Year 5: {props.risk} */}
            {/* Start: {props.currentfund} */}
            Change: idk
          </li>
        </div>
      </section>
      <section className="market-vector-wrapper risk-aggressive">
        <div className="market-blurb-wrapper market-blurb-one">
          <li>
            {/* Year 1: {props.risk} */}
            Start: $5,000 Change: idk
          </li>
        </div>
        <div className="market-blurb-wrapper market-blurb-two">
          <li>
            {/* Year 2: {props.risk} */}
            {/* Start: {props.currentfund} */}
            Change: idk
          </li>
        </div>
        <div className="market-blurb-wrapper market-blurb-three">
          <li>
            {/* Year 3: {props.risk} */}
            {/* Start: {props.currentfund} */}
            Change: idk
          </li>
        </div>
        <div className="market-blurb-wrapper market-blurb-four">
          <li>
            {/* Year 4: {props.risk} */}
            {/* Start: {props.currentfund} */}
            Change: idk
          </li>
        </div>
        <div className="market-blurb-wrapper market-blurb-five">
          <li>
            {/* Year 5: {props.risk} */}
            {/* Start: {props.currentfund} */}
            Change: idk
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

export default connect(mapStateToProps)(PortfolioView);
