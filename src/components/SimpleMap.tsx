import React from "react";
import "ol/ol.css";
import * as ol from "openlayers";

class SimpleMap extends React.Component {
  componentDidMount() {
    new ol.Map({
      view: new ol.View({
        projection: "EPSG:4326",
        center: [48, 40],
        zoom: 8
      }),
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      target: "map"
    });
  }

  render() {
    return <div id="map" style={{ width: "100%", height: "550px" }}></div>;
  }
}

export default SimpleMap;
