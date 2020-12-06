import React from 'react';

import {
  Grid,
} from "tabler-react";

import classnames from "classnames";

import styles from "./StatisticsBar.module.css";

class StatisticsBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      active: 0,
      recovered: 0,
      deaths: 0
    }
  }

  static getDerivedStateFromProps(props, state) {
    return {
      total: props.total,
      active: props.active,
      recovered: props.recovered,
      deaths: props.deaths
    };
  }

  render() {
    return (
      <Grid.Row>
        <Grid.Col xs={6} sm={6} md={6} lg={3} xl={3}>
          <div className={classnames(styles.all, styles.total)}>
            TOTAL CASES
          </div>
          <div className={classnames(styles.all, styles.number, styles.total)}>
            {this.state.total}
          </div>
        </Grid.Col>
        <Grid.Col xs={6} sm={6} md={6} lg={3} xl={3}>
          <div className={classnames(styles.all, styles.active)}>
            ACTIVE
          </div>
          <div className={classnames(styles.all, styles.number, styles.active)}>
            {this.state.active}
          </div>
        </Grid.Col>
        <Grid.Col xs={6} sm={6} md={6} lg={3} xl={3}>
          <div className={classnames(styles.all, styles.recovered)}>
            RECOVERED
          </div>
          <div className={classnames(styles.all, styles.number, styles.recovered)}>
            {this.state.recovered}
          </div>
        </Grid.Col>
        <Grid.Col xs={6} sm={6} md={6} lg={3} xl={3}>
          <div className={classnames(styles.all, styles.death)}>
            DEATH
          </div>
          <div className={classnames(styles.all, styles.number, styles.death)}>
            {this.state.deaths}
          </div>
        </Grid.Col>
      </Grid.Row>
    )
  }
}

export default StatisticsBar;