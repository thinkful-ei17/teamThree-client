import React from 'react';
import { connect } from 'react-redux';

export function YearSummaryList(props){
    const years = props.years.slice(1);
    const yearList = years.map( year => {
        return(
            <li key={year.x} className='year-summary-item'>
                <h4 className='list-item-heading'>Year {year.x}: {year.strategy}</h4>
                <p classname='list-item-content'> Start: ${year.previousYear}  End: ${year.y}</p>
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