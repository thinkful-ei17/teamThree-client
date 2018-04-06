import React from "react";

import { connect } from "react-redux";
import requiresLogin from './requires-login';
import Button from "./button";
import Chart from "./chart";
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
        listItemsMattress,
        investmentReturnContent,
        graphHigh,
        graphLow,
        graphModerate,
        graphMattress;
      
      if (this.props.data) {
        
        let investmentData = this.props.data;
        listItemsHigh = investmentData.filter(item => item.risk === 'high').map((risk, index) => (
          <ul>
            <li className="column-heading">
              Year {risk.x}
            </li>
            <li key={index} className="market-blurb-wrapper">
              Balance: {risk.y}
              <br />
              % Change: {risk.gain}
              <br />
              $ Change: {risk.amtChange}
            </li>
          </ul>
      ));

        listItemsLow = investmentData.filter(item => item.risk === 'low').map((risk, index) => (
          <li key={index} className="market-blurb-wrapper">
            Balance: {risk.y}
            <br />
            % Change: {risk.gain}
            <br />
            $ Change: {risk.amtChange}
          </li>
      ));

    listItemsModerate = investmentData.filter(item => item.risk === 'moderate').map((risk, index) => (
      <li key={index} className="market-blurb-wrapper">
        Balance: {risk.y}
        <br />
        % Change: {risk.gain}
        <br />
        $ Change: {risk.amtChange}
      </li>
    ));

    listItemsMattress = investmentData.filter(item => item.risk === 'mattress').map((risk, index) => (
      <li key={index} className="market-blurb-wrapper">
        Balance: {risk.y}
        <br />
        % Change: {risk.gain}
        <br />
        $ Change: {risk.amtChange}
      </li>
  ));

  graphMattress = investmentData.filter(item => item.risk === 'mattress').map((risk, index) => (
    {x: risk.x, y: risk.y}
  ));

  graphHigh = investmentData.filter(item => item.risk === 'high').map((risk, index) => (
    {x: risk.x, y: risk.y}
  ));

  graphLow = investmentData.filter(item => item.risk === 'low').map((risk, index) => (
    {x: risk.x, y: risk.y}
  ));

  graphModerate = investmentData.filter(item => item.risk === 'moderate').map((risk, index) => (
    {x: risk.x, y: risk.y}
  ));

  const data = [
    {
      color: "#5DCB6E",
      name: "High",
      points: [{x: 0, y: 5000},...graphHigh]
    },
    {
      color: "#C24275",
      name: "Conservative",
      points: [{x: 0, y: 5000},...graphLow]
    },
    {
      color: "steelblue",
      name: "Moderate",
      points: [{x: 0, y: 5000},...graphModerate]
    },
    {
      color: "black",
      name: "Mattress",
      points: 
      [{x: 0, y: 5000},...graphMattress]
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
        <div className="market-view">
          <h1>Five Year Market Summary:</h1>
          {investmentReturnContent}
          <h2> Investment Outcomes By Year:</h2>
          <h3>Aggressive</h3>
          <ul className="market-vector-wrapper">
            {listItemsHigh}
          </ul>
          <h3>Moderate</h3>
          <ul className="market-vector-wrapper">
            {listItemsModerate}
          </ul>
          <h3>Conservative</h3>
          <ul className="market-vector-wrapper">
            {listItemsLow}
          </ul>
          <h3>Mattress</h3>
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
  return {
    data: state.marketReducer.data,
  };
};

export default requiresLogin()(connect(mapStateToProps)(FiveYearMarket));
