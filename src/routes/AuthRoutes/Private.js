import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({
  user: { id, organizationId },
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      // instead of id check real version would have auth check
      if (!id)
        return (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        );
      if (!organizationId) return <div>Loading</div>;
      return <Component {...props} />;
    }}
  />
);

PrivateRoute.propTypes = {
  user: PropTypes.object.isRequired,
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  location: PropTypes.object.isRequired
};

export default withRouter(
  connect(state => ({ user: state.user }))(PrivateRoute)
);
