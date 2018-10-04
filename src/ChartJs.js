import React from 'react';
import Line from 'react-chartjs';

import { chartJsData } from './mockData';

class ChartJs extends React.Component {
  render() {
    return (
      <Line.LineChart
        data={chartJsData}
        width="600"
        height="400"
      />
    );
  }
}

export default ChartJs;
