import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import AppRoutes from "./routes";
import { fetchUser } from "./redux/actions/user";
import store from "./redux/store";

class App extends Component {
  componentDidMount() {
    store.dispatch(fetchUser());
  }

  render() {
    return (
      <Router>
        <Provider store={store}>
          <AppRoutes />
        </Provider>
      </Router>
    );
  }
}

export default App;
