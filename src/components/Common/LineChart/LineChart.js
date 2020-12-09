// @flow

import React from 'react';

import C3Chart from "react-c3js";

class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: { height: "24rem" },
      data: {
        type: "line",
        ...props.data
      },
      axis: {
        y: {
          show: true,
          tick: {
            inner: true,
            label: 'Cases',
          },
        },
        x: {
          show: true,
          tick: {
            format: '%d/%m/%y',
          },
          type: "timeseries"
        },
      },
      grid: {
        x: {
          show: true
        },
        y: {
          show: true
        }
      },
      legend: {
        position: "bottom",
        padding: 0,
      },
      tooltip: {
        format: {
          title: function(x) {
            return props.title;
          },
        },
      },
      padding: {
        top: 10,
        bottom: 10,
        left: 50,
        right: 20,
      },
      point: {
        show: true,
      }
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      data: {
        ...props.data,
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

export default LineChart;