import React from 'react';
import { Chart } from 'react-google-charts';

import { numberOfClicksArray } from './mockData';


class GoogleChart extends React.Component {
  render() {
    return (
      <Chart
        width="600px"
        height="400px"
        chartType="LineChart"
        data={numberOfClicksArray}
        options={{
          hAxis: {
            title: 'Time'
          },
          vAxis: {
            title: 'Clicks'
          }
        }}
      />
    )
  }
}

export default GoogleChart;
