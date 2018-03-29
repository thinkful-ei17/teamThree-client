import React from 'react';
import {connect} from 'react-redux';

export function YearSummaryList(props){
    const yearList = props.years.map( year => {
        return(
            <li key={year.year} className='year-summary-item'>
                <h3>Year {year.year}: {year.choice}</h3>
                <p> Start: ${year.start}  End: ${year.end}</p>
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
    years:[
        {year: 1, choice: 'aggressive', start:'5000', end:'6000'},
        {year: 2, choice: 'mattress', start:'6000', end:'6000'}
    ] //change to actually get from user state once there is state
});

export default connect(mapStateToProps)(YearSummaryList)