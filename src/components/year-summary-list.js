import React from 'react';
import {connect} from 'react-redux';

export function YearSummaryList(props){
    const years = props.years.slice(1);
    const yearList = years.map( year => {
        return(
            <li key={year.x} className='year-summary-item'>
                <h4>Year {year.x}: {year.strategy}</h4>
                <p> Start: ${year.previousYear}  End: ${year.y}</p>
            </li>
        )
    });

    return (
        <ul className='year-summary-list'>
            {yearList}
        </ul>
    )
}

const mapStateToProps = (state, props) => ({
    years: state.portfolio.portfolio
});

export default connect(mapStateToProps)(YearSummaryList)