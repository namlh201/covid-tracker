// @flow

import React from "react";

import {
  Page,
} from "tabler-react";

import SiteWrapper from "../SiteWrapper/SiteWrapper.js";

import SearchBar from './SearchBar.js';
import CountryStatisticsCard from "../../Common/StatisticsCard/CountryStatisticsCard.js";

class Countries extends React.Component {
  constructor() {
    super();
    this.state = {
      countryCode: "",
    }
  }

  updateCountryCode = (countryCode) => {
    this.setState({
      countryCode: countryCode
    });
  }

  render() {
    return (
      <SiteWrapper>
        <Page.Content>
          <SearchBar
            onChange={this.updateCountryCode}
          />
          <CountryStatisticsCard country={this.state.countryCode} />
        </Page.Content>
      </SiteWrapper>
    )
  }
}

export default Countries;