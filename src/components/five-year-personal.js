import React from "react";

import { connect } from "react-redux";

// import Button from "./button";
import Chart from "./chart";

import { fetchPortfolio } from "../actions/portfolio";

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
          <li key={index} className="blurb-wrapper">
            Year {year.year}: {year.strategy}
            <br />
            Start: ${year.previousYear}
            <br />
            End: ${year.y}
            <br />
            Change: {year.growth}%
          </li>
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
              y: 7800
            },
            {
              x: 2,
              y: 13260
            },
            {
              x: 3,
              y: 23735
            },
            {
              x: 4,
              y: 37265
            },
            {
              x: 5,
              y: 69685
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
        <ul className="vector-wrapper">
          {listItems}
        </ul>
        <h2> Optimal Investment Strategy By Year:</h2>
        <ul className="vector-wrapper">
            <li className="blurb-wrapper">
              Year 1: Moderate
              <br />
              Start: $5000
              <br />
              End: $7800
              <br />
              Change: 56%
            </li>
            <li className="blurb-wrapper">
              Year 2: Moderate
              <br />
              Start: $7800
              <br />
              End: $13,260
              <br />
              Change: 70%
            </li>
            <li className="blurb-wrapper">
              Year 3: High
              <br />
              Start: $13,260
              <br />
              End: $23,735
              <br />
              Change: 79%
            </li>
            <li className="blurb-wrapper">
              Year 4: Moderate
              <br />
              Start: $23,735
              <br />
              End: $37,265
              <br />
              Change: 57%
            </li>
            <li className="blurb-wrapper">
              Year 5: High
              <br />
              Start: $37,265
              <br />
              End: $69,685
              <br />
              Change: 87%
            </li>
        </ul>
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
