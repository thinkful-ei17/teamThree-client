import React from 'react';



export default function RiskDetail(props){

    return(
       <div className='risk-detail'> 
            <h3>{props.riskType}</h3>
            <p className='risk-detail-units'>
                {props.stocks}% Stocks
            </p>
            <p className='risk-detail-units'>
                {props.bonds}% Bonds
            </p>
        </div>
    );
};

//keeping these here for putting into the RiskBreakdown later//
/* <RiskDetail riskType='Conservative' stocks='20' bonds='80'/>
<RiskDetail riskType='Moderate' stocks='50' bonds='50'/>
<RiskDetail riskType='Aggressive' stocks='80' bonds='20'/> */

