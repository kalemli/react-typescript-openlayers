import React from "react";
import { Link } from "@material-ui/core";

function Home() {
  return (
    <div>
      <h1>Useful Links</h1>
      <h2>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://openlayers.org/"
        >
          OpenLayers official web site
        </Link>
      </h2>
      <h2>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="http://geojson.io/"
        >
          GeoJSON
        </Link>
      </h2>

      <h2>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://taylor.callsen.me/using-reactflux-with-openlayers-3-and-other-third-party-libraries/"
        >
          Using OpenLayers with React
        </Link>
      </h2>
    </div>
  );
}

export default Home;
