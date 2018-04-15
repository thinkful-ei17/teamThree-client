import React from "react";

import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import requiresLogin from './requires-login';
import Button from "./button";
import Chart from "./chart";

import { fetchLvl2RiskMarket } from "../actions/five-year-market";

const numeral = require('numeral');

export class Lvl2FiveYearMarket extends React.Component {
    componentWillMount() {
      this.props.dispatch(fetchLvl2RiskMarket(this.props.year5Amt));
    }

    render() {
      let listItemsAggressive,
        listItemsConservative,
        listItemsModerate,
        listItemsMattress,
        listItemsGoogle,
        listItemsAutoZone,
        listItemsDollarTree,
        listItemsElectronicArts,
        investmentReturnContent,
        graphAggressive,
        graphConservative,
        graphModerate,
        graphMattress,
        graphGoogle,
        graphAutoZone,
        graphDollarTree,
        graphElectronicArts;
      
      let id = 0;
      
      if (this.props.data) {
        
        let investmentData = this.props.data;

        listItemsAggressive = investmentData.filter(item => item.risk === 'Aggressive').map(risk => {
            id++;
            const yFormat = numeral(risk.y).format('$0,0');
            const amtChangeFormat = numeral(risk.amtChange).format('0,0');
            return (
              <li key={id} className="market-blurb-wrapper left-align-object">
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
            <li key={id} className="market-blurb-wrapper left-align-object">
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
            <li key={id} className="market-blurb-wrapper left-align-object">
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
            <li key={id} className="market-blurb-wrapper left-align-object">
              <div className='column-heading'>Year {risk.x}</div>
              Balance: {yFormat}
              <br />
              % Change: {risk.gain}
              <br />
              $ Change: {amtChangeFormat}
            </li>
          )
        });

        listItemsGoogle = investmentData.filter(item => item.risk === 'Google').map(risk => {
          id++;
          const yFormat = numeral(risk.y).format('$0,0');
          const amtChangeFormat = numeral(risk.amtChange).format('0,0');
          return (
            <li key={id} className="market-blurb-wrapper left-align-object">
              <div className='column-heading'>Year {risk.x}</div>
              Balance: {yFormat}
              <br />
              % Change: {risk.gain}
              <br />
              $ Change: {amtChangeFormat}
            </li>
          )
        });

        listItemsAutoZone = investmentData.filter(item => item.risk === 'AutoZone').map(risk => {
          id++;
          const yFormat = numeral(risk.y).format('$0,0');
          const amtChangeFormat = numeral(risk.amtChange).format('0,0');
          return (
            <li key={id} className="market-blurb-wrapper left-align-object">
              <div className='column-heading'>Year {risk.x}</div>
              Balance: {yFormat}
              <br />
              % Change: {risk.gain}
              <br />
              $ Change: {amtChangeFormat}
            </li>
          )
        });

        listItemsDollarTree = investmentData.filter(item => item.risk === 'Dollar Tree').map(risk => {
          id++;
          const yFormat = numeral(risk.y).format('$0,0');
          const amtChangeFormat = numeral(risk.amtChange).format('0,0');
          return (
            <li key={id} className="market-blurb-wrapper left-align-object">
              <div className='column-heading'>Year {risk.x}</div>
              Balance: {yFormat}
              <br />
              % Change: {risk.gain}
              <br />
              $ Change: {amtChangeFormat}
            </li>
          )
        });

        listItemsElectronicArts = investmentData.filter(item => item.risk === 'Electronic Arts').map(risk => {
          id++;
          const yFormat = numeral(risk.y).format('$0,0');
          const amtChangeFormat = numeral(risk.amtChange).format('0,0');
          return (
            <li key={id} className="market-blurb-wrapper left-align-object">
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

        graphGoogle = investmentData.filter(item => item.risk === 'Google').map(risk => {
          id++;
          return (
            {x: risk.x, y: risk.y, key: id}
          )
        });

        graphAutoZone = investmentData.filter(item => item.risk === 'AutoZone').map(risk => {
          id++;
          return (
            {x: risk.x, y: risk.y, key: id}
          )
        });

        graphDollarTree = investmentData.filter(item => item.risk === 'Dollar Tree').map(risk => {
          id++;
          return (
            {x: risk.x, y: risk.y, key: id}
          )
        });

        graphElectronicArts = investmentData.filter(item => item.risk === 'Electronic Arts').map(risk => {
          id++;
          return (
            {x: risk.x, y: risk.y, key: id}
          )
        });

        const data = [
          {
            color: "#5DCB6E",
            name: "Aggressive",
            points: [{ x: 5, y: this.props.year5Amt },...graphAggressive]
          },
          {
            color: "#39A7B1",
            name: "Moderate",
            points: [{ x: 5, y: this.props.year5Amt },...graphModerate]
          },
          {
            color: "#C24275",
            name: "Conservative",
            points: [{ x: 5, y: this.props.year5Amt },...graphConservative]
          },
          {
            color: "#783DB8",
            name: "Mattress",
            points: 
            [{ x: 5, y: this.props.year5Amt },...graphMattress]
          },
          {
            color: "#3478A2",
            name: "Google",
            points: 
            [{ x: 5, y: this.props.year5Amt },...graphGoogle]
          },
          {
            color: "#B6DF9B",
            name: "AutoZone",
            points: 
            [{ x: 5, y: this.props.year5Amt },...graphAutoZone]
          },
          {
            color: "#2C8B39",
            name: "Dollar Tree",
            points: 
            [{ x: 5, y: this.props.year5Amt },...graphDollarTree]
          },
          {
            color: "#141414",
            name: "Electronic Arts",
            points: 
            [{ x: 5, y: this.props.year5Amt },...graphElectronicArts]
          }
        ];

        investmentReturnContent = (
          <div className='center-object'>
            <Chart yMin={0} xMin={5} xMax={10} legend={true} data={data} />
          </div>
        );

      }
      return (
        <div className="market-view viewport">
          <h2 className='primary-heading'>Market Recap: Years 6-10</h2>
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
          <h3 className='descriptive-content primary-text-color small-half-margin-bottom'>Google</h3>
          <ul className="market-vector-wrapper small-no-margin-top">
             {listItemsGoogle}
          </ul>
          <h3 className='descriptive-content primary-text-color small-half-margin-bottom'>AutoZone</h3>
          <ul className="market-vector-wrapper small-no-margin-top">
             {listItemsAutoZone}
          </ul>
          <h3 className='descriptive-content primary-text-color small-half-margin-bottom'>Dollar Tree</h3>
          <ul className="market-vector-wrapper small-no-margin-top">
             {listItemsDollarTree}
          </ul>
          <h3 className='descriptive-content primary-text-color small-half-margin-bottom'>Electronic Arts</h3>
          <ul className="market-vector-wrapper small-no-margin-top">
             {listItemsElectronicArts}
          </ul>
          <div className='right-align-object small-no-margins small-center'>  
            <Link to='/ten-year-personal'>
                <Button class='blue-button margin-right small-all-margins' name="Compare Personal Success" handleClick={ () => false} />
            </Link>
          </div>
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
