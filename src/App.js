import React, { Component } from 'react';
import './App.css';
import Vis from './Vis';
import GoogleChart from './GoogleCharts';
import ChartJs from './ChartJs';
import ReactD3Component from './ReactD3';

class App extends Component {
  state = {
    selected: 'vis',
  }

  toggleSelected = (value) => () => {
    this.setState({ selected: value });
  }

  renderLineGraphVersion = () => {
    const { selected } = this.state;
    switch (selected) {
      case 'vis':
        return <Vis />;
      case 'google':
        return <GoogleChart />;
      case 'chartjs':
        return <ChartJs />;
      case 'reactD3':
        return <ReactD3Component />;
      default:
        return "Nothing selected matches!";
    }
  }

  render() {
    return (
      <div className="App">
        <ul>
          <li onClick={this.toggleSelected('vis')}>React Vis</li>
          <li onClick={this.toggleSelected('google')}>Google Charts</li>
          <li onClick={this.toggleSelected('chartjs')}>ChartJs</li>
          <li onClick={this.toggleSelected('reactD3')}>React D3</li>
        </ul>
        <main>
          {this.renderLineGraphVersion()}
        </main>
      </div>
    );
  }
}

export default App;
