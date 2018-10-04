import React from 'react';
import { LineChart } from 'react-d3-components';

import { reactD3Data } from './mockData';

class ReactD3Component extends React.Component {
  render() {
    const tooltipLine = (label, data) => {
      console.log('x value: ', data);
      return `x: ${data.x}, y: ${data.y}`;
    }

    return (
      <LineChart
        data={reactD3Data}
        width={600}
        height={400}
        tooltipHtml={tooltipLine}
        shapeColor="red"
      />
    )
  }
}

export default ReactD3Component;
