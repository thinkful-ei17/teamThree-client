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



