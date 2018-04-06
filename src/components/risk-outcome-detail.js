import React from 'react';

export default function RiskOutcomeDetail(props){

    return(
       <dl className='risk-outcome-detail'>
        <dt>{props.riskType}:</dt>
        <dd>start: {props.start}</dd>
        <dd>end: {props.end}</dd>
        <dd>change: {props.change}%</dd>
        </dl>
    );
}