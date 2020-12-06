// @flow

import React from "react";

import {
  Grid,
  Card,
  colors,
} from "tabler-react";

import PieChart from "../PieChart/PieChart.js";
import StatisticsBar from "../StatisticsBar/StatisticsBar.js";

import styles from "./StatisticsCard.module.css";

class CountryStatisticsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: props.country,
      countryName: "",
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

  updateData = (country) => {
    if (country !== "") {
      fetch("https://cov20.herokuapp.com/api/countries/" + country)
        .then(resp => resp.json())
        .then(responsedData => {
          this.setState({
            countryName: responsedData["data"]["countryName"],
            data: {
              total: responsedData["data"]["cases"].toLocaleString("en-US"),
              active: responsedData["data"]["active"].toLocaleString("en-US"),
              recovered: responsedData["data"]["recovered"].toLocaleString("en-US"),
              deaths: responsedData["data"]["deaths"].toLocaleString("en-US")
            },
            chart: {
              data: {
                columns: [
                  ["Active", Math.round((responsedData["data"]["active"] / responsedData["data"]["cases"] + Number.EPSILON) * 100) / 100],
                  ["Recovered", Math.round((responsedData["data"]["recovered"] / responsedData["data"]["cases"] + Number.EPSILON) * 100) / 100],
                  ["Deaths", Math.round((responsedData["data"]["deaths"] / responsedData["data"]["cases"] + Number.EPSILON) * 100) / 100],
                ]
              }
            }
          })
        })
    }
  }

  // componentDidMount() {
  //   this.updateData(this.state.country);
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (nextProps.country !== prevState.country) {
  //     return { country: nextProps.country };
  //   }
  //   return null;
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if(this.state.country === nextProps.country) {
  //     return false
  //   } else {
  //     return true
  //   }
  // }

  componentDidUpdate() {
    this.updateData(this.props.country);
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
                        STATISTICS IN {this.state.countryName.toUpperCase()} 
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

export default CountryStatisticsCard;