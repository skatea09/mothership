import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from './AuthRoutes/Private';
import Billing from "./Billing";
import Home from './Home';

const AppRoutes = () => (
  <Switch>
    <Route
      sensitive
      path="/:anything*([A-Z]):anything*/"
      render={props => (
        <Redirect to={`${props.location.pathname.toLowerCase()}`} />
      )}
    />
    <PrivateRoute exact path="/" component={Home} />
    <PrivateRoute path="/billing" component={Billing} />
    <Route component={() => <div>No match!</div>} />
  </Switch>
);

export default AppRoutes;
