// @flow

import React from "react";

import {
  Grid,
  Card,
  colors,
} from "tabler-react";

import LineChart from "../LineChart/LineChart.js";

class CountryHistoryCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryName: "",
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

  updateData = (country, lastDays) => {
    fetch("https://disease.sh/v3/covid-19/historical/" + country + "?lastdays=" + lastDays)
      .then(resp => resp.json())
      .then(responsedData => {
        let data = responsedData["timeline"];
        let dates = Object.keys(data["cases"]).slice(1, lastDays + 1);
        let cases = Object.values(data["cases"]).map((curr, idx, arr) => {
          return arr[idx + 1] - curr;
        }).slice(0, lastDays);
        let recovered = Object.values(data["recovered"]).map((curr, idx, arr) => {
          return arr[idx + 1] - curr;
        }).slice(0, lastDays);
        let deaths = Object.values(data["deaths"]).map((curr, idx, arr) => {
          return arr[idx + 1] - curr;
        }).slice(0, lastDays);

        this.setState({
          countryName: responsedData["country"],
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

  componentDidUpdate() {
    if (this.props.isRendered) {
      this.updateData(this.props.country, this.props.lastDays);
    }
  }

  render() {
    if (this.props.isRendered) {
      return (
        <Grid.Row cards>
          <Grid.Col>
            <Card>
              <Grid.Row>
                <Grid.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                  <LineChart data={this.state.chart.data} title={this.state.countryName}/>
                </Grid.Col>
              </Grid.Row>
            </Card>
          </Grid.Col>
        </Grid.Row>
      )
    }
    return null;
  }
}

export default CountryHistoryCard;