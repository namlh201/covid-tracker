// @flow

import React from 'react';

import styles from "./BarChart.module.css";

import {
  Card
} from "tabler-react";

import C3Chart from "react-c3js";

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: this.props.style, //{height: "13rem"},
      data: this.props.data, //{
      //   columns: [
      //     ["data1", 63],
      //     ["data2", 37]
      //   ],
      //   type: "donut",
      //   colors: {
      //     data1: colors["green"],
      //     data2: colors["green-light"]
      //   },
      //   names: {
      //     data1: "Maximum",
      //     data2: "Minimum"
      //   }
      // },
      legend: this.props.legend, //{show: false},
      padding: this.props.padding //{
      //   bottom: 0,
      //   top: 0
      // }
    };
  }

  render() {
    return (
      <Card>
        <Card.Header>
          <Card.Title className={styles.cardTitle}>
            <div style={{fontWeight: "bold"}}>{this.props.title}</div>
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <C3Chart
            style={this.state.style}
            data={this.state.data}
            legend={this.state.legend}
            padding={this.state.padding}
          />
        </Card.Body>
      </Card>
    )
  }
}

export default BarChart;