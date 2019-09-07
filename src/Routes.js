import React from "react";
import { Route, Switch } from "react-router-dom";
import UploadCsv from "./components/upload/UploadCsv";
import Home from "./components/home/Home";
import "./css/App.css";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={UploadCsv} />
      <Route path="/home" component={Home} />
    </Switch>
  );
}

export default Routes;
