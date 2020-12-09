import React from 'react';

import Select from 'react-select';

import {
  Grid,
  Card
} from 'tabler-react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      countryData: []
    }
  }

  getCountryData = () => {
    fetch("https://cov20.herokuapp.com/api/countries")
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          countryData: data["data"].sort((a, b) => {
            return a["countryName"].localeCompare(b["countryName"])
          }).map(element => {
            return { 
              label: element["countryName"],
              value: element["countryName"],
              code: element["countryCode"]
            }
          })
        })
      });
  }

  componentDidMount() {
    this.getCountryData();
  }

  handleChange = (selectedOption) => {
    this.props.onChange(selectedOption["code"]);
  }

  render () {
    return (
      <Grid.Row cards>
      <Grid.Col>
        <Card>
          <Grid.Row>
            <Grid.Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <Select
                value={this.state.selectedOption}
                placeholder="Select Country"
                options={this.state.countryData}
                onChange={this.handleChange}
              />
            </Grid.Col>
          </Grid.Row>
        </Card>
      </Grid.Col>
    </Grid.Row>
    )
  }
}

export default SearchBar;