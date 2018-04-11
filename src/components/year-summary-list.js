import React from 'react';
import { connect } from 'react-redux';

export function YearSummaryList(props){
    const years = props.years.slice(1);
    const yearList = years.map( year => {
        return(
            <li key={year.x} className='year-summary-item blurb-wrapper'>
                Year {year.x}: 
                <br />
                {year.strategy}
                <br />
                Start: ${year.previousYear}
                <br />
                End: ${year.y}
            </li>
        )
    });

    return (
        <ul className='year-summary-list vector-wrapper'>
            {yearList}
        </ul>
    )
}

const mapStateToProps = (state, props) => ({
    years: state.portfolio.portfolio
});

export default connect(mapStateToProps)(YearSummaryList)