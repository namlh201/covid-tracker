// @flow

import React from "react";
import { NavLink, withRouter } from "react-router-dom";

import {
  Site,
  RouterContextProvider
} from "tabler-react";

const navBarItems = [
  {
    value: "Global",
    to: "/global",
    icon: "globe",
    LinkComponent: withRouter(NavLink),
    useExact: true,
  },
  {
    value: "Countries",
    to: "/countries",
    icon: "flag",
    LinkComponent: withRouter(NavLink),
  },
  {
    value: "Maps",
    to: "/maps",
    icon: "map",
    LinkComponent: withRouter(NavLink)
  }
];

const NavigationBar = () => {
  return (
    <Site.Nav
      collapse={false}
      itemsObjects={navBarItems}
      routerContextComponentType={withRouter(RouterContextProvider)}
    >

    </Site.Nav>
  )
}

export default NavigationBar;