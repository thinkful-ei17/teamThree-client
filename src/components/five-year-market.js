import React from "react";

import { connect } from "react-redux";
import requiresLogin from './requires-login';
import Button from "./button";
import Chart from "./chart";
import { Link } from 'react-router-dom';

import { fetchRiskMarket } from "../actions/five-year-market";

import "./five-year-market.css";

const numeral = require('numeral');

export class FiveYearMarket extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchRiskMarket());
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
      
      let investmentData = this.props.data.filter(item => item.x <= 5);

      listItemsAggressive = investmentData.filter(item => item.risk === 'Aggressive').map(risk => {
        id++;
        const yFormat = numeral(risk.y).format('$0,0');
        const amtChangeFormat = numeral(risk.amtChange).format('0,0');
        return (
          <li key={id} className="market-blurb-wrapper">
            <div className='column-heading'>Year {risk.x}</div>
            Balance: {yFormat}
            <br />
            % Change: {risk.gain}
            <br />
            $ Change: {amtChangeFormat}
          </li>
        )
      });

      listItemsConservative = investmentData.filter(item => item.risk === 'Conservative').map(risk => {
        id++;
        const yFormat = numeral(risk.y).format('$0,0');
        const amtChangeFormat = numeral(risk.amtChange).format('0,0');
        return (
          <li key={id} className="market-blurb-wrapper">
            <div className='column-heading'>Year {risk.x}</div>
            Balance: {yFormat}
            <br />
            % Change: {risk.gain}
            <br />
            $ Change: {amtChangeFormat}
          </li>
        )
      });

      listItemsModerate = investmentData.filter(item => item.risk === 'Moderate').map(risk => {
        id++;
        const yFormat = numeral(risk.y).format('$0,0');
        const amtChangeFormat = numeral(risk.amtChange).format('0,0');
        return (
          <li key={id} className="market-blurb-wrapper">
            <div className='column-heading'>Year {risk.x}</div>
            Balance: {yFormat}
            <br />
            % Change: {risk.gain}
            <br />
            $ Change: {amtChangeFormat}
          </li>
        )
      });

      listItemsMattress = investmentData.filter(item => item.risk === 'Mattress').map(risk => {
        id++;
        const yFormat = numeral(risk.y).format('$0,0');
        const amtChangeFormat = numeral(risk.amtChange).format('0,0');
        return (
          <li key={id} className="market-blurb-wrapper">
            <div className='column-heading'>Year {risk.x}</div>
            Balance: {yFormat}
            <br />
            % Change: {risk.gain}
            <br />
            $ Change: {amtChangeFormat}
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
        <div className='center-object chart-width'>
          <Chart yMin={3000} xMax={5} legend={true} data={data} />
        </div>
      );
    }
    return (
      <div className="market-view viewport">
        <h2 className='primary-heading'>Level 1 Five Year Market Summary:</h2>
          {investmentReturnContent}
          <h2 className='secondary-heading primary-text-color'> Investment Outcomes By Year:</h2>
          <h3 className='descriptive-content primary-text-color small-half-margin-bottom'>Aggressive</h3>
          <ul className="market-vector-wrapper small-no-margin-top">
            {listItemsAggressive}
          </ul>
          <h3 className='descriptive-content primary-text-color small-half-margin-bottom'>Moderate</h3>
          <ul className="market-vector-wrapper small-no-margin-top">
            {listItemsModerate}
          </ul>
          <h3 className='descriptive-content primary-text-color small-half-margin-bottom'>Conservative</h3>
          <ul className="market-vector-wrapper small-no-margin-top">
            {listItemsConservative}
          </ul>
          <h3 className='descriptive-content primary-text-color small-half-margin-bottom'>Mattress</h3>
          <ul className="market-vector-wrapper small-no-margin-top">
             {listItemsMattress}
          </ul>
          <div className='right-align-object small-no-margins small-center'>
            <Link to='/five-year-personal'>
                <Button class='blue-button margin-right small-all-margins' name="Compare Personal Success" handleClick={ () => false} />
            </Link>
          </div>  
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
