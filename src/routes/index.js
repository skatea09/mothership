import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Billing from "./Billing";

const AppRoutes = () => (
  <Switch>
    <Route
      sensitive
      path="/:anything*([A-Z]):anything*/"
      render={props => (
        <Redirect to={`${props.location.pathname.toLowerCase()}`} />
      )}
    />
    <Route exact path="/" render={props => <Redirect to={"/billing"} />} />
    <Route path="/billing" component={Billing} />
    <Route component={() => <div>No match!</div>} />
  </Switch>
);

export default AppRoutes;
