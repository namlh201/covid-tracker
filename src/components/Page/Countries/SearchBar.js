import React from 'react';
import Select from 'react-select';

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
      <Select
        value={this.state.selectedOption}
        placeholder="Select Country"
        options={this.state.countryData}
        onChange={this.handleChange}
      />
    )
  }
}

export default SearchBar;