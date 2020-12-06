import React from "react";

import {
  Site,
} from "tabler-react";

import styles from "./Header.module.css";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Site.Header>
          <a href="/" className={styles.logo}>{this.props.title}</a>
        </Site.Header>
      </div>
    )
  }
}

export default Header;