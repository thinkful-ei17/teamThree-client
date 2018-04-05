import React from "react";

import { connect } from "react-redux";
import requiresLogin from './requires-login';
import Button from "./button";
//import Chart from "./chart";
import { Link } from 'react-router-dom';

import { fetchRiskMarket } from "../actions/five-year-market";

import "./five-year-market.css";

export class FiveYearMarket extends React.Component {
     componentWillMount() {
       this.props.dispatch(fetchRiskMarket());
     }


    render() {
      let listItemsHigh,
        listItemsLow,
        listItemsModerate,
        listItemsMattress;
      
      if (this.props.data) {
        
        let investmentData = this.props.data;
        listItemsHigh = investmentData.filter(item => item.risk === 'high').map((risk, index) => (
          <ul>
            <li className="column-heading-year">
              Year {risk.year}
            </li>
            <li key={index} className="market-blurb-wrapper">
              Balance: {risk.yearEndBalance}
              <br />
              % Change: {risk.gain}
              <br />
              $ Change: {risk.amtChange}
            </li>
          </ul>
      ));

        listItemsLow = investmentData.filter(item => item.risk === 'low').map((risk, index) => (
          <li key={index} className="market-blurb-wrapper">
            Balance: {risk.yearEndBalance}
            <br />
            % Change: {risk.gain}
            <br />
            $ Change: {risk.amtChange}
          </li>
      ));

    listItemsModerate = investmentData.filter(item => item.risk === 'moderate').map((risk, index) => (
      <li key={index} className="market-blurb-wrapper">
        Balance: {risk.yearEndBalance}
        <br />
        % Change: {risk.gain}
        <br />
        $ Change: {risk.amtChange}
      </li>
    ));

    listItemsMattress = investmentData.filter(item => item.risk === 'mattress').map((risk, index) => (
      <li key={index} className="market-blurb-wrapper">
        Balance: {risk.yearEndBalance}
        <br />
        % Change: {risk.gain}
        <br />
        $ Change: {risk.amtChange}
      </li>
  ));
      }
      return (
        //line graph
        <div className="market-view">
          <h1>Five Year Market Summary:</h1>
          {/*<Chart/>*/}
          <h2> Investment Outcomes By Year:</h2>
          <ul className="market-vector-wrapper">
            {listItemsHigh}
          </ul>
          <ul className="market-vector-wrapper">
            {listItemsModerate}
          </ul>
          <ul className="market-vector-wrapper">
            {listItemsLow}
          </ul>
          <ul className="market-vector-wrapper">
             {listItemsMattress}
          </ul>
            <Link to='/five-year-personal'>
                <Button name="Show Me Mine! " handleClick={ () => false} />
            </Link>
          </div>
        );
      } 
  }

const mapStateToProps = state => {
  console.log('what is in state? - 5 market', state.marketReducer.data);
  return {
  data: state.marketReducer.data,
  };
};

export default requiresLogin()(connect(mapStateToProps)(FiveYearMarket));
