import React from "react";

import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import Button from "./button";
import Chart from "./chart";

import { restartLevel1 } from "../actions/portfolio";

let numeral = require('numeral');

export class FiveYearPersonal extends React.Component {

  startOver = () => {
    this.props.dispatch(restartLevel1());
  }

  render() {
    let listItems,
      currentFund,
      overallChange,
      overallGrowth,
      investmentReturnContent,
      currentFundFormat,
      overallChangeFormat,
      initialAmount;
    
    if (this.props.data) {
      currentFund = this.props.currentFund;
      initialAmount = this.props.data[0].y; //user's initial funds at year 0 $5000
      overallChange = currentFund - initialAmount;
      overallGrowth = Math.round((overallChange/initialAmount) * 100);

      let investmentData = this.props.data.slice(1);
      console.log("investmentData = ", investmentData)
      currentFundFormat = numeral(currentFund).format('0,0');
      overallChangeFormat = numeral(overallChange).format('0,0');

      listItems = investmentData.map((year, index) => {
        let yFormat = numeral(year.y).format('0,0');
        let previousYearFormat = numeral(year.previousYear).format('0,0');
        return (
          <li key={index} className="blurb-wrapper">
            Year {year.x}: {year.strategy}
            <br />
            Start: ${previousYearFormat}
            <br />
            End: ${yFormat}
            <br />
            Change: {year.growth}%
          </li>
      )});
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
              y: 5409
            },
            {
              x: 2,
              y: 5409
            },
            {
              x: 3,
              y: 6761
            },
            {
              x: 4,
              y: 7779
            },
            {
              x: 5,
              y: 8113
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
        <h3 className='secondary-heading primary-text-color'>Your Portfolio Worth: ${currentFundFormat}</h3>
        <h3 className='descriptive-content accent-dk-green'>Change: ${overallChangeFormat}</h3>
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
              Year 1: Conservative
              <br />
              Start: $5,000
              <br />
              End: $5,409
              <br />
              Change: 8.18%
            </li>
            <li className="blurb-wrapper">
              Year 2: Mattress
              <br />
              Start: $5,409
              <br />
              End: $5,409
              <br />
              Change: 0%
            </li>
            <li className="blurb-wrapper">
              Year 3: Aggressive
              <br />
              Start: $5,409
              <br />
              End: $6,761
              <br />
              Change: 24.99%
            </li>
            <li className="blurb-wrapper">
              Year 4: Aggressive
              <br />
              Start: $6,761
              <br />
              End: $7,779
              <br />
              Change: 15.06%
            </li>
            <li className="blurb-wrapper">
              Year 5: Moderate
              <br />
              Start: $7,779
              <br />
              End: $8,113
              <br />
              Change: 4.29%
            </li>
        </ul>
        <Link to='/investment-form'>
          <Button class='green-button' name='Start Over' handleClick={this.startOver}/>
        </Link>
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
