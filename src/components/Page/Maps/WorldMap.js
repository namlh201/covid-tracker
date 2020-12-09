// @flow

import React from "react";

import { VectorMap } from "react-jvectormap";

class WorldMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapData: {},
      colorScale: {
        total: ["#ffffff", "#820000"],
        active: ["#ffffff", "#b69b28"],
        recovered: ["#ffffff", "#448600"],
        deaths: ["#ffffff", "#5a6167"]
      }
    }
  }

  getMapData = (filtered) => {
    fetch("https://cov20.herokuapp.com/api/countries")
      .then(resp => resp.json())
      .then(data => {
        if (filtered === "total") {
          this.setState({
            mapData: data["data"].reduce((a,x) => ({...a, [x["countryCode"]]: x["cases"]}), {})
          })
        } else {
          this.setState({
            mapData: data["data"].reduce((a,x) => ({...a, [x["countryCode"]]: x[filtered]}), {})
          })
          console.log(this.state.mapData);
        }
      });
  }

  componentDidMount() {
    this.getMapData(this.props.filtered);
  }

  render() {
    return (
      <VectorMap
        map="world_mill"
        backgroundColor="transparent"
        zoomOnScroll={false}
        containerStyle={{
          width: "100%",
          height: "520px",
          paddingTop: "0%"
        }}
        containerClassName="map"
        regionStyle={{
          initial: {
            fill: "white",
            "fill-opacity": 0.9,
            stroke: "grey",
            "stroke-width": 0.5,
            "stroke-opacity": 1
          },
          hover: {
            "fill-opacity": 0.8,
            cursor: "pointer"
          },
          selected: {
            fill: "#2938bc",
            "fill-opacity": 0.6
          },
          selectedHover: {}
        }}
        regionLabelStyle={{
          initial: {
            'font-family': 'Roboto',
            'font-size': '13',
            'font-weight': 'bold',
            cursor: 'default',
            fill: 'black'
          },
          hover: {
            cursor: 'pointer'
          }
        }}
        regionsSelectable={false}
        series={{
          regions: [
            {
              values: this.state.mapData,
              scale: this.state.colorScale[this.props.filtered],
              normalizeFunction: "polynomial"
            }
          ]
        }}
      />
    )
  }
}

export default WorldMap;