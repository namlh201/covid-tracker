// @flow

import React from "react";

import {
  Page,
  TabbedCard,
  Tab,
  Tabs
} from "tabler-react";

import SiteWrapper from "../SiteWrapper/SiteWrapper.js";
import WorldMap from "./WorldMap.js";

class Maps extends React.Component {
  render() {
    return (
      <SiteWrapper>
        <Page.Content>
          <TabbedCard initialTab="Total">
            <Tab title="Total">
              <WorldMap filtered="total" />
            </Tab>
            <Tab title="Active">
              <WorldMap filtered="active" />
            </Tab>
            <Tab title="Recovered">
              <WorldMap filtered="recovered" />
            </Tab>
            <Tab title="Deaths">
              <WorldMap filtered="deaths" />
            </Tab>
          </TabbedCard>
        </Page.Content>
      </SiteWrapper>
    )
  }
}

export default Maps;