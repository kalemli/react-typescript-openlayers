import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import SimpleMap from "./components/SimpleMap";
import Overlay from "./components/Overlay";

export const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/simple-map" exact component={SimpleMap} />
        <Route path="/overlay" exact component={Overlay} />
      </Switch>
    </React.Fragment>
  );
};
