import React from "react";

import { connect } from "react-redux";
import requiresLogin from './requires-login';
import Button from "./button";
import Chart from "./chart";
import { Link } from 'react-router-dom';

import { fetchLvl2RiskMarket } from "../actions/five-year-market";

export class Lvl2FiveYearMarket extends React.Component {
    componentWillMount() {
      this.props.dispatch(fetchLvl2RiskMarket(this.props.year5Amt));
    }

    render() {
      let listItemsAggressive,
        listItemsConservative,
        listItemsModerate,
        listItemsMattress,
        investmentReturnContent,
        graphAggressive,
        graphConservative,
        graphModerate,
        graphMattress;
      
      let id = 0;
      
      if (this.props.data) {
        
        let investmentData = this.props.data;

        listItemsAggressive = investmentData.filter(item => item.risk === 'Aggressive').map(risk => {
            id++;
            return (
              <li key={id} className="market-blurb-wrapper">
                <div className='column-heading'>Year {risk.x}</div>
                Balance: {risk.y}
                <br />
                % Change: {risk.gain}
                <br />
                $ Change: {risk.amtChange}
              </li>
            )
      });

        listItemsConservative = investmentData.filter(item => item.risk === 'Conservative').map(risk => {
          id++;
          return (
            <li key={id} className="market-blurb-wrapper">
              <div className='column-heading'>Year {risk.x}</div>
              Balance: {risk.y}
              <br />
              % Change: {risk.gain}
              <br />
              $ Change: {risk.amtChange}
            </li>
          )
        });

        listItemsModerate = investmentData.filter(item => item.risk === 'Moderate').map(risk => {
          id++;
          return (
            <li key={id} className="market-blurb-wrapper">
              <div className='column-heading'>Year {risk.x}</div>
              Balance: {risk.y}
              <br />
              % Change: {risk.gain}
              <br />
              $ Change: {risk.amtChange}
            </li>
          )
        });

        listItemsMattress = investmentData.filter(item => item.risk === 'Mattress').map(risk => {
          id++;
          return (
            <li key={id} className="market-blurb-wrapper">
              <div className='column-heading'>Year {risk.x}</div>
              Balance: {risk.y}
              <br />
              % Change: {risk.gain}
              <br />
              $ Change: {risk.amtChange}
            </li>
          )
        });

        graphMattress = investmentData.filter(item => item.risk === 'Mattress').map(risk => {
          id++;
          return (
            {x: risk.x, y: risk.y, key: id}
          )
        });

        graphAggressive = investmentData.filter(item => item.risk === 'Aggressive').map(risk => {
          id++;
          return (
            {x: risk.x, y: risk.y, key: id}
          )
        });

        graphConservative = investmentData.filter(item => item.risk === 'Conservative').map(risk => {
          id++;
          return (
            {x: risk.x, y: risk.y, key: id}
          )
        });

        graphModerate = investmentData.filter(item => item.risk === 'Moderate').map(risk => {
          id++;
          return (
            {x: risk.x, y: risk.y, key: id}
          )
        });

        const data = [
          {
            color: "#5DCB6E",
            name: "Aggressive",
            points: [{x: 0, y: 5000},...graphAggressive]
          },
          {
            color: "#39A7B1",
            name: "Moderate",
            points: [{x: 0, y: 5000},...graphModerate]
          },
          {
            color: "#C24275",
            name: "Conservative",
            points: [{x: 0, y: 5000},...graphConservative]
          },
          {
            color: "#783DB8",
            name: "Mattress",
            points: 
            [{x: 0, y: 5000},...graphMattress]
          }
        ];

        investmentReturnContent = (
          <div className='center-object'>
            <Chart yMin={0} xMax={5} legend={true} data={data} />
          </div>
        );

      }
      return (
        //line graph
        <div className="market-view viewport">
          <h2 className='primary-heading'>Five Year Market Summary:</h2>
          {investmentReturnContent}
          <h2 className='secondary-heading primary-text-color'> Investment Outcomes By Year:</h2>
          <h3 className='descriptive-content primary-text-color'>Aggressive</h3>
          <ul className="market-vector-wrapper">
            {listItemsAggressive}
          </ul>
          <h3 className='descriptive-content primary-text-color'>Moderate</h3>
          <ul className="market-vector-wrapper">
            {listItemsModerate}
          </ul>
          <h3 className='descriptive-content primary-text-color'>Conservative</h3>
          <ul className="market-vector-wrapper">
            {listItemsConservative}
          </ul>
          <h3 className='descriptive-content primary-text-color'>Mattress</h3>
          <ul className="market-vector-wrapper">
             {listItemsMattress}
          </ul>
            <Link to='/ten-year-personal'>
                <Button class='blue-button' name="Compare Personal Success" handleClick={ () => false} />
            </Link>
          </div>
        );
      } 
  }

const mapStateToProps = state => {
  return {
    year5Amt: state.portfolio.year5Amt,
    data: state.marketReducer.data,
  };
};

export default requiresLogin()(connect(mapStateToProps)(Lvl2FiveYearMarket));
