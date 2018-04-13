import React from 'react';

export default function RiskDetail(props){

    return(
       <div className='risk-detail'> 
            <h3 className='secondary-heading primary-text-color small-center small-no-margin-bottom'>{props.riskType}</h3>
            <p className='risk-detail-units'>
                {props.stocks}% Stocks
            </p>
            <p className='risk-detail-units'>
                {props.bonds}% Bonds
            </p>
        </div>
    );
};

