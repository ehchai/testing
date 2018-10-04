import React from 'react';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineMarkSeries} from 'react-vis';

import { numberOfClicks } from './mockData';

class Vis extends React.Component {
  state = {
    value: ''
  }

  render() {
    console.log('state: ', this.state);
    return (
      <XYPlot
        width={600}
        height={400}
      >
        <HorizontalGridLines />
        <LineMarkSeries
          data={numberOfClicks}
          color="blue"
          style={{ fill: "transparent" }}
          onValueMouseOver={(value) => {
            console.log(value);
          }}
        />
        <XAxis />
        <YAxis />
      </XYPlot>
    )
  }
}

export default Vis;
