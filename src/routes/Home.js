import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Home = ({ hasOrgId }) =>
  hasOrgId ? <Redirect to="/billing" /> : <div>Home Loading</div>;

  
Home.propTypes = {
  hasOrgId: PropTypes.bool.isRequired
};

export default connect(state => ({
  hasOrgId: !!state.user.organizationId
}))(Home);
