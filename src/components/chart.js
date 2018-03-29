import React from 'react';
import LineChart from 'react-linechart';
import '../../node_modules/react-linechart/dist/styles.css';
 
export default class Chart extends React.Component {
    render() {
        const data = [
            {									
                color: 'steelblue', 
                name: 'Sample Portfolio',
                points: [{x: 0, y: 5000}, {x: 1, y: 7000}, {x: 2, y: 8000}, {x: 3, y: 4000}, {x: 4, y: 6000}] 
            // } ,
            // {
            //     color: 'black',
            //     points: [{x: 0, y: 1000}, {x: 1, y: 2000}, {x: 2, y: 4000}, {x: 3, y: 8000}, {x: 4, y: 6000}] 
            }
        ];
        return (
            <div className="chart">
                <LineChart 
                    width={600}
                    height={600}
                    xLabel='Years'
                    yLabel='Portfolio Value ($)'
                    yMin='0'
                    xMax='5'
                    interpolate='linear'
                    data={data}
                />
            </div>				
        );
    }
}