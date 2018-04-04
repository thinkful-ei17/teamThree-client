import React from "react";

import { connect } from "react-redux";

// import Button from "./button";
import Chart from "./chart";

import { fetchPortfolio } from "../actions/portfolio";

import "./five-year-personal.css";

export class FiveYearPersonal extends React.Component {
  render() {
    let listItems = null;
    let profitloss = null;
    let fund = null;
    let change = null;
    let investmentReturnContent = null;
    if (this.props.data) {
      console.log(this.props);
      fund = this.props.user.currentFund;
      change = this.props.risk[this.props.risk.length - 1].previousYear - fund;
      listItems = this.props.risk.map((year, index) => (
        <div className="blurb-wrapper blurb-one">
          <li>
            Year {index + 1}: {year.strategy}
            <br />
            Start: {year.y}
            <br />
            Change: {year.growth}%
          </li>
          {listItems}
        </div>
      ));
      const data = [
        {
          color: "steelblue",
          name: "Your Choices",
          points: this.props.data
        },
        {
          color: "black",
          name: "Optimal Choices",
          points: [
            {
              x: 0,
              y: 5000
            },
            {
              x: 1,
              y: 5100
            }
          ]
        }
      ];
      investmentReturnContent = (
        <div>
          <Chart yMin={0} xMax={5} data={data} />
        </div>
      );
    }
    return (
      //line graph
      <div className="portfolio-view">
        <h1>Five Year Personal Summary:</h1>
        <h2>Your portfolio Worth:${fund}</h2>
        <h2>Change:${change}</h2>
        <h2>Your Investment Choices Vs Optimal Choices:</h2>
        <p>Black is Optimal</p>
        {investmentReturnContent}
        <h2> Your Investment Choices by Year:</h2>
        <section className="vector-wrapper">{listItems}
        </section>
        <h2> Optimal Investment Choice By Year:</h2>
        <section className="vector-wrapper">
          <div className="blurb-wrapper blurb-one">
            <li>
              Year 1: Moderate
              <br />
              56%
            </li>
          </div>
          <div className="blurb-wrapper blurb-two">
            <li>
              Year 2: Moderate<br />
              70%
            </li>
          </div>
          <div className="blurb-wrapper blurb-three">
            <li>
              Year 3: High<br />
              79%
            </li>
          </div>
          <div className="blurb-wrapper blurb-four">
            <li>
              Year 4: Moderate<br />
              57%
            </li>
          </div>
          <div className="blurb-wrapper blurb-five">
            <li>
              Year 5: High<br />
              87%
            </li>
          </div>
        </section>
        {/* {Button} */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  if (state.portfolio.portfolio === null) {
    return {
      risk: null
    };
  } else {
    return {
      user: state.auth.currentUser,
      data: state.portfolio.portfolio,
      risk: state.portfolio.portfolio.filter(index => index.strategy),
      year: state.portfolio.year
    };
  }
};

export default connect(mapStateToProps)(FiveYearPersonal);
