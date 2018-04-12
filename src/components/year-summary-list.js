import React from 'react';
import { connect } from 'react-redux';

let numeral = require('numeral');

export function YearSummaryList(props){
    const years = props.years.slice(1);
    const yearList = years.map( year => {
        let previousYearFormat = numeral(year.previousYear).format('0,0');
        let yFormat = numeral(year.y).format('0,0');
        return(
            <li key={year.x} className='year-summary-item blurb-wrapper portfolio-width left-align-object padding portfolio-width'>
                Year {year.x}: 
                <br />
                {year.strategy}
                <br />
                Start: ${previousYearFormat}
                <br />
                End: ${yFormat}
            </li>
        )
    });

    return (
        <ul className='year-summary-list vector-wrapper flex-start'>
            {yearList}
        </ul>
    )
}

const mapStateToProps = (state, props) => ({
    years: state.portfolio.portfolio
});

export default connect(mapStateToProps)(YearSummaryList)