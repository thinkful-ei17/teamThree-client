import React from 'react';
import ReactSvgPieChart from 'react-svg-piechart';

import './pie-chart.css';

export default function PieChart(props) {
    const data = [
        {
            title: 'Stocks',
            color: '#5DCB6E',
            value: props.stocksValue
        },
        {
            title: 'Bonds',
            color: '#C24275',
            value: props.bondsValue
        }
    ];

    return (
        <div className='pie-chart-container'>
            <ReactSvgPieChart 
                viewBoxSize={1}
                strokeWidth={0.01}
                data={data}
            />
        </div>
    );
}
