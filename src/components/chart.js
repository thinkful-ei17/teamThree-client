import React from 'react';
import LineChart from 'react-linechart';
import '../../node_modules/react-linechart/dist/styles.css';
import './chart.css';

export default function Chart(props) {
    return (
        <div className="chart">
            <LineChart 
                width={600}
                height={600}
                xLabel='Years'
                yLabel='Portfolio Value ($)'
                yMin={props.yMin}
                xMax={props.xMax}
                interpolate='linear'
                data={props.data}
                showLegends={props.legend}
            />
        </div>				
    );
}