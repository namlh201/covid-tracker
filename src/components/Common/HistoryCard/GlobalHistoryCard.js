// @flow

import React from "react";

import {
  Grid,
  Card,
  colors,
} from "tabler-react";

import LineChart from "../LineChart/LineChart.js";

class GlobalHistoryCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chart: {
        data: {
          columns: [
            ["Date", ""],
            ["Cases", 0],
            ["Recovered", 0],
            ["Deaths", 0],
          ],
          colors: {
            Cases: colors["red"],
            Recovered: colors["green"],
            Deaths: colors["gray"]
          },
          names: {
            Cases: "New Cases",
            Recovered: "Recovered",
            Deaths: "Deaths"
          },
          x: "Date",
          xFormat: "%m/%d/%y"
        }
      }
    }
  }

  updateData = (lastDays) => {
    fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=" + lastDays)
      .then(resp => resp.json())
      .then(responsedData => {
        let dates = Object.keys(responsedData["cases"]).slice(1, lastDays + 1);
        let cases = Object.values(responsedData["cases"]).map((curr, idx, arr) => {
          return arr[idx + 1] - curr;
        }).slice(0, lastDays);
        let recovered = Object.values(responsedData["recovered"]).map((curr, idx, arr) => {
          return arr[idx + 1] - curr;
        }).slice(0, lastDays);
        let deaths = Object.values(responsedData["deaths"]).map((curr, idx, arr) => {
          return arr[idx + 1] - curr;
        }).slice(0, lastDays);

        this.setState({
          chart: {
            data: {
              columns: [
                ["Date", ...dates],
                ["Cases", ...cases],
                ["Recovered", ...recovered],
                ["Deaths", ...deaths],
              ]
            }
          }
        })
      })
  }

  componentDidMount() {
    this.updateData(this.props.lastDays);
  }

  render() {
    return (
      <Grid.Row cards>
        <Grid.Col>
          <Card>
            <Grid.Row>
              <Grid.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <LineChart data={this.state.chart.data} title="Global"/>
              </Grid.Col>
            </Grid.Row>
          </Card>
        </Grid.Col>
      </Grid.Row>
    )
  }
}

export default GlobalHistoryCard;