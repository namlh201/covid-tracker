// @flow

import React from 'react';

import C3Chart from "react-c3js";

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {height: "16rem"},
      data: {
        type: "pie",
        ...this.props,
      },
      legend: {show: true},
      padding: {
        bottom: 10,
        top: 10
      }
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      data: {
        type: "pie",
        ...props,
      },
    };
  }

  render() {
    return (
      <C3Chart
        {...this.state}
      />
    )
  }
}

export default BarChart;