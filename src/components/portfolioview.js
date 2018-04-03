import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import Button from "./button";

import './portfolioview.css';

export function PortfolioView(props) {
  return (
    //line graph
    <div className="portfolio-view">
      <h1>Five Year Personal Summary:</h1>
      <h2>Your portfolio Worth:</h2>
      <h2>Change:</h2>
      <h2> Your Investment Choices by Year:</h2>
      <section className="vector-wrapper">
        <div className="blurb-wrapper blurb-one">
          <li>
            {/* Year 1: {props.risk} */}
            Start: $5,000 Change: idk
          </li>
        </div>
        <div className="blurb-wrapper blurb-two">
          <li>
            {/* Year 2: {props.risk} */}
            {/* Start: {props.currentfund} */}
            Change: idk
          </li>
        </div>
        <div className="blurb-wrapper blurb-three">
          <li>
            {/* Year 3: {props.risk} */}
            {/* Start: {props.currentfund} */}
            Change: idk
          </li>
        </div>
        <div className="blurb-wrapper blurb-four">
          <li>
            {/* Year 4: {props.risk} */}
            {/* Start: {props.currentfund} */}
            Change: idk
          </li>
        </div>
        <div className="blurb-wrapper blurb-five">
          <li>
            {/* Year 5: {props.risk} */}
            {/* Start: {props.currentfund} */}
            Change: idk
          </li>
        </div>
      </section>
      <h2> Optimal Investment Choice By Year:</h2>
      <section className="vector-wrapper">
        <div className="blurb-wrapper blurb-one">
          <li>
            {/* Year 1: {props.risk} */}
            2.7%
          </li>
        </div>
        <div className="blurb-wrapper blurb-two">
          <li>
            {/* Year 2: {props.risk} */}
            %
          </li>
        </div>
        <div className="blurb-wrapper blurb-three">
          <li>
            {/* Year 3: {props.risk} */}
            %
          </li>
        </div>
        <div className="blurb-wrapper blurb-four">
          <li>
            {/* Year 4: {props.risk} */}
            %
          </li>
        </div>
        <div className="blurb-wrapper blurb-five">
          <li>
            {/* Year 5: {props.risk} */}
            %
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
