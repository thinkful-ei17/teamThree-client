import React from "react";

import { connect } from "react-redux";

// import Button from "./button";
import Chart from "./chart";

import { fetchPortfolio } from "../actions/portfolio";

import "./five-year-personal.css";

export class FiveYearPersonal extends React.Component {
  render() {
    let listItems,
      profitloss,
      currentFund,
      overallChange,
      overallGrowth,
      investmentReturnContent;
    
    if (this.props.data) {
      currentFund = this.props.currentFund;

      overallChange = currentFund - 5000;
      overallGrowth = (overallChange/5000) * 100;

      let investmentData = this.props.data.slice(1);

      listItems = investmentData.map((year, index) => (
        <div className="blurb-wrapper blurb-one">
          <li key={index}>
            Year {year.year}: {year.strategy}
            <br />
            Start: {year.y}
            <br />
            Change: {year.growth}%
          </li>
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
        <h2>Your portfolio Worth: ${currentFund}</h2>
        <h2>Change: ${overallChange}</h2>
        <h2>Growth: {overallGrowth}%</h2>
        <h2>Your Investment Strategy Vs Optimal Investment Strategy:</h2>
        <p>Black is Optimal</p>
        {investmentReturnContent}
        <h2> Your Investment Strategy by Year:</h2>
        <section className="vector-wrapper">
          {listItems}
        </section>
        <h2> Optimal Investment Strategy By Year:</h2>
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
  return {
    user: state.auth.currentUser,
    data: state.portfolio.portfolio,
    year: state.portfolio.year,
    currentFund: state.portfolio.currentFund
  }
};

export default connect(mapStateToProps)(FiveYearPersonal);
