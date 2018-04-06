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
      overallGrowth = Math.round((overallChange/5000) * 100);

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
          color: "#783DB8",
          name: "Optimal Strategy",
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
        },
        {
          color: '#C24275',
          name: "Your Strategy",
          points: this.props.data
        },
      ];
      investmentReturnContent = (
        <div className='center-object'>
          <Chart yMin={0} xMax={5} legend={true} data={data} />
        </div>
      );
    }
    return (
      //line graph
      <div className="portfolio-view viewport">
        <h2 className='primary-heading'>Five Year Personal Summary:</h2>
        <h3 className='secondary-heading primary-text-color'>Your Portfolio Worth: ${currentFund}</h3>
        <h3 className='descriptive-content accent-dk-green'>Change: ${overallChange}</h3>
        <h3 className='descriptive-content accent-dk-green'>Growth: {overallGrowth}%</h3>
        <h3 className='secondary-heading primary-text-color'>Your Investment Strategy Vs Optimal Investment Strategy:</h3>
        {investmentReturnContent}
        <h3 className='secondary-heading primary-text-color'> Your Investment Strategy by Year:</h3>
        <ul className="vector-wrapper">
          {listItems}
        </ul>
        <h3 className='secondary-heading primary-text-color'> Optimal Investment Strategy By Year:</h3>
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
