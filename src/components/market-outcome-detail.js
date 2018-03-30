import React from 'react';
import RiskOutcomeDetail from './risk-outcome-detail';


export default function MarketOutcomeDetail(props){
    const year = props.year;
    console.log('year:', year);
    console.log('riskTypes:',year.riskTypes);
    console.log('moderate:', year.riskTypes.moderate);
    console.log('moderate.start:', year.riskTypes.moderate.start);
 
    return(
        <dl className='market-outcome-detail'>
            <dt>Year {year.year}</dt>
             <dd>
                 <RiskOutcomeDetail 
                    riskType='Mattress'
                    start={year.riskTypes.mattress.start}
                    end={year.riskTypes.mattress.end}
                    change={year.riskTypes.mattress.change}
                />
             </dd>  
             <dd>
                 <RiskOutcomeDetail 
                    riskType='Conservative'
                    start={year.riskTypes.conservative.start}
                    end={year.riskTypes.conservative.end}
                    change={year.riskTypes.conservative.change}
                />
             </dd> 
             <dd>
                 <RiskOutcomeDetail 
                    riskType='Moderate'
                    start={year.riskTypes.moderate.start}
                    end={year.riskTypes.moderate.end}
                    change={year.riskTypes.moderate.change}
                />
             </dd>   
             <dd>
                 <RiskOutcomeDetail 
                    riskType='Aggressive'
                    start={year.riskTypes.aggressive.start}
                    end={year.riskTypes.aggressive.end}
                    change={year.riskTypes.aggressive.change}
                />
             </dd>   
        </dl>                
    );
}

// /<RiskOutcomeDetail riskType='Mattress' start='5500' end='5500' change='0'/>

//this component is assuming the prop coming in will be nested objects
//this will probably need tweeking when we have real data
// const year = {
//      year: 1,
//     riskTypes: {
//             mattress: {start:'5000', end:'5200', change: '1.2'},
//             moderate: {start:'5000', end:'5200', change: '1.2'},
//             conservative: {start:'5000', end:'5200', change: '1.2'},
//             aggressive: {start:'5000', end:'5200', change: '1.2'}
//      }
// };



