// @flow

import React from "react";

import {
  Page,
} from "tabler-react";

import SiteWrapper from "../SiteWrapper/SiteWrapper.js";

import GlobalStatisticsCard from "../../Common/StatisticsCard/GlobalStatisticsCard.js";
import GlobalHistoryCard from "../../Common/HistoryCard/GlobalHistoryCard.js";

class Global extends React.Component {
  render() {
    return (
      <SiteWrapper>
        <Page.Content>
          <GlobalStatisticsCard />
          <GlobalHistoryCard lastDays={10} />
        </Page.Content>
      </SiteWrapper>
    )
  }
}

export default Global;