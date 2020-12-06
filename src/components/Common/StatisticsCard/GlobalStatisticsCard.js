// @flow

import React from "react";

import {
  Page,
  Avatar,
  Icon,
  Grid,
  Card,
  Text,
  Table,
  Alert,
  Progress,
  colors,
  Dropdown,
  Button,
  StampCard,
  StatsCard,
  ProgressCard,
  Badge,
} from "tabler-react";

import PieChart from "../PieChart/PieChart.js";
import StatisticsBar from "../StatisticsBar/StatisticsBar.js";

import styles from "./StatisticsCard.module.css";

class GlobalStatisticsCard extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {
        total: 0,
        active: 0,
        recovered: 0,
        deaths: 0
      },
      chart: {
        data: {
          columns: [
            ["Active", 0],
            ["Recovered", 0],
            ["Deaths", 0],
          ],
          colors: {
            Active: colors["orange"],
            Recovered: colors["green"],
            Deaths: colors["gray"]
          },
          names: {
            Active: "Active",
            Recovered: "Recovered",
            Deaths: "Deaths"
          },
          labels: false
        }
      }
    }
  }

  updateData = () => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then(resp => resp.json())
      .then(responsedData => {
        this.setState({
          data: {
            total: responsedData["cases"].toLocaleString("en-US"),
            active: responsedData["active"].toLocaleString("en-US"),
            recovered: responsedData["recovered"].toLocaleString("en-US"),
            deaths: responsedData["deaths"].toLocaleString("en-US")
          },
          chart: {
            data: {
              columns: [
                ["Active", responsedData["active"] / responsedData["cases"]],
                ["Recovered", responsedData["recovered"] / responsedData["cases"]],
                ["Deaths", responsedData["deaths"] / responsedData["cases"]],
              ]
            }
          }
        })
      })
  }

  componentDidMount() {
    this.updateData();
  }

  render() {
    return (
      <Grid.Row cards>
        <Grid.Col>
          <Card>
            <Grid.Row>
              <Grid.Col xs={12} sm={12} md={4} lg={4} xl={4}>
                <PieChart {...this.state.chart.data} />
              </Grid.Col>
              <Grid.Col xs={12} sm={12} md={8} lg={8} xl={8}>
                <div className={styles.stats}>
                  <Grid.Col>
                    <div className={styles.statsItems}>
                      <div className={styles.statsBanner}>
                        GLOBAL STATISTICS
                      </div>
                    </div>
                    <div className={styles.statsItems}>
                      <StatisticsBar {...this.state.data} />
                    </div>
                  </Grid.Col>
                </div>
              </Grid.Col>
            </Grid.Row>
          </Card>
        </Grid.Col>
      </Grid.Row>
    )
  }
}

export default GlobalStatisticsCard;