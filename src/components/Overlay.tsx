import React, { useEffect } from "react";
import "ol/ol.css";
import * as ol from "openlayers";

export default function Overlay() {
  useEffect(() => {
    const map = new ol.Map({
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

    map.on("click", (event: any) => {
      marker.setPosition(undefined);
      marker.setPosition(event.coordinate);
      document.getElementById("marker")!.innerHTML = event.coordinate;
    });
    var marker = new ol.Overlay({
      positioning: "center-center",
      element: document.getElementById("marker")!,
      stopEvent: false
    });
    map.addOverlay(marker);
  }, []);

  return (
    <div>
      <div
        id="marker"
        style={{
          border: "1px solid gray",
          backgroundColor: "white",
          padding: "2px 5px",
          cursor: "default",
          font: "11px Verdana"
        }}
      ></div>
      <div id="map" style={{ width: "100%", height: "550px" }}></div>
    </div>
  );
}
