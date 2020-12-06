// @flow

import React from "react";
import { NavLink, withRouter } from "react-router-dom";

import {
  Site,
  RouterContextProvider,
  Nav,
  Button
} from "tabler-react";

import Header from "./Header/Header.js";
import NavigationBar from "./NavigationBar/NavigationBar.js";

class SiteWrapper extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Header title="COVID Tracker"/>
        <NavigationBar />
        <Site>
          {this.props.children}
        </Site>
      </div>
    );
  }
}

export default SiteWrapper;