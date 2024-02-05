import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Piechart = ({options1}) => {

    const chartWrapperStyles = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 300px))',
        margin: '2rem 0',
        justifyContent: 'space-between',
        padding: '0px 300px 0px 100px'
    };


    return (
        <div style={chartWrapperStyles}>
            {
                options1.map((option, index) => {
                    return <div key={`chart-${index}`}>
                        <CanvasJSChart options={option} />
                        </div>
                })
            }
        </div>
    );
};

export default Piechart;
