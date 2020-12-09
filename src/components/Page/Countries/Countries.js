// @flow

import React from "react";

import {
  Page,
} from "tabler-react";

import SiteWrapper from "../SiteWrapper/SiteWrapper.js";

import SearchBar from './SearchBar.js';
import CountryStatisticsCard from "../../Common/StatisticsCard/CountryStatisticsCard.js";
import CountryHistoryCard from "../../Common/HistoryCard/CountryHistoryCard.js";

class Countries extends React.Component {
  constructor() {
    super();
    this.state = {
      availableToRender: false,
      countryCode: "",
    }
  }

  updateCountryCode = (countryCode) => {
    this.setState({
      availableToRender: true,
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
          <CountryStatisticsCard 
            country={this.state.countryCode}
            isRendered={this.state.availableToRender}
          />
          <CountryHistoryCard
            country={this.state.countryCode}
            lastDays={10}
            isRendered={this.state.availableToRender}
          />
        </Page.Content>
      </SiteWrapper>
    )
  }
}

export default Countries;