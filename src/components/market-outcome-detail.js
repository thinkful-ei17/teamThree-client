import React from 'react';
import RiskOutcomeDetail from './risk-outcome-detail';


export default function MarketOutcomeDetail(props){
    const year = props.year;
    // const riskTypes = props.year.riskTypes;
    console.log('year:', props.year);
    const yearOutcomes = year.riskTypes.map(riskType => {
        console.log(riskType);
        return(    
            <dd>
                <RiskOutcomeDetail 
                    riskType={riskType} 
                    start={riskType.start} 
                    end={riskType.end} 
                    change={riskType.change}
                />
            </dd>
        );
    });

    return(
        <dl className='market-outcome-detail'>
            <dt>Year {year.year}</dt>
                {yearOutcomes}
        </dl>                
    );
}

//this component is assuming the prop coming in will be nested objects
//this will probably need tweeking when we have real data
// const year = {
//      year: 1,
//     riskTypes: [
//             {mattress: {start:'5000', end:'5200', change: '1.2'}},
//             {moderate: {start:'5000', end:'5200', change: '1.2'}},
//             {conservative: {start:'5000', end:'5200', change: '1.2'}},
//             {aggressive: {start:'5000', end:'5200', change: '1.2'}}
//     ]
// };



