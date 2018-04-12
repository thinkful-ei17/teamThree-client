import React from "react";

import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import Button from "./button";
import Chart from "./chart";

import { fetchPortfolio, restartLevel1 } from "../actions/portfolio";

const numeral = require('numeral');

export class TenYearPersonal extends React.Component {
  componentDidMount() {
    if (this.props.portfolio === null) {
        this.props.dispatch(fetchPortfolio());
    }
  }

  startOver = () => {
    this.props.dispatch(restartLevel1());
  }

  render() {
    let listItemsToYear5,
      listItemsFromYear6To10,
      currentFund,
      overallChange,
      overallGrowth,
      investmentReturnContent,
      currentFundFormat,
      overallChangeFormat,
      initialAmount;
    
    if (this.props.data) {
      currentFund = this.props.currentFund;
      initialAmount = this.props.data[0].y;
      overallChange = currentFund - 5000;
      overallGrowth = Math.round((overallChange/5000) * 100);

      let investmentDataToYear5 = this.props.data.slice(1,6);
      let investmentDataFromYear6To10 = this.props.data.slice(6,11);

      currentFundFormat = numeral(currentFund).format('0,0');
      overallChangeFormat = numeral(overallChange).format('0,0');

      listItemsToYear5 = investmentDataToYear5.map((year, index) => {
        const yFormat = numeral(year.y).format('0,0');
        const previousYearFormat = numeral(year.previousYear).format('0,0');
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
        )  
      });

      listItemsFromYear6To10 = investmentDataFromYear6To10.map((year, index) => {
        const yFormat = numeral(year.y).format('0,0');
        const previousYearFormat = numeral(year.previousYear).format('0,0');
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
        )  
      });

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
            },
            {
              x: 6,
              y: 12085
            },
            {
              x: 7,
              y: 14647
            },
            {
              x: 8,
              y: 22710
            },
            {
              x: 9,
              y: 46799
            },
            {
              x: 10,
              y: 66624
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
          <Chart yMin={0} xMax={10} legend={true} data={data} />
        </div>
      );
    }
    return (
      <div className="portfolio-view viewport">
        <h2 className='primary-heading'>Ten Year Personal Summary:</h2>
        <h3 className='secondary-heading primary-text-color'>Your Portfolio Worth: ${currentFundFormat}</h3>
        <h3 className='descriptive-content accent-dk-green'>Change: ${overallChangeFormat}</h3>
        <h3 className='descriptive-content accent-dk-green'>Growth: {overallGrowth}%</h3>
        <h3 className='secondary-heading primary-text-color'>Your Investment Strategy Vs Optimal Investment Strategy:</h3>
        {investmentReturnContent}
        <h3 className='secondary-heading primary-text-color'> Your Investment Strategy by Year:</h3>
        <ul className="vector-wrapper">
          {listItemsToYear5}
        </ul>
        <ul className="vector-wrapper">
          {listItemsFromYear6To10}
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
        <ul className="vector-wrapper">
          <li className="blurb-wrapper">
            Year 6: Dollar Tree
            <br />
            Start: $8,113
            <br />
            End: $12,085
            <br />
            Change: 48.96%
          </li>
          <li className="blurb-wrapper">
            Year 7: Aggressive
            <br />
            Start: $12,085
            <br />
            End: $14,647
            <br />
            Change: 21.2%
          </li>
          <li className="blurb-wrapper">
            Year 8: Google
            <br />
            Start: $14,647
            <br />
            End: $22,710
            <br />
            Change: 55.05%
          </li>
          <li className="blurb-wrapper">
            Year 9: Electronic Arts
            <br />
            Start: $22,710
            <br />
            End: $46,799
            <br />
            Change: 106.07%
          </li>
          <li className="blurb-wrapper">
            Year 10: Electronic Arts
            <br />
            Start: $46,799
            <br />
            End: $66,624
            <br />
            Change: 42.36%
          </li>
        </ul>
        <div className='right-align-object'>
          <Link to='/investment-form'>
            <Button class='green-button' name='Start Over' handleClick={this.startOver}/>
          </Link>
        </div>
      </div>
    );
  }
}

  const mapStateToProps = state => {
  return {
    user: state.auth.currentUser,
    data: state.portfolio.portfolio,
    year: state.portfolio.year,
    currentFund: state.portfolio.currentFund,
    portfolio: state.portfolio.portfolio
  }
};

export default connect(mapStateToProps)(TenYearPersonal);