import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import AppRoutes from "./routes";
import { fetchUser } from "./redux/actions/user";
import store from "./redux/store";


class App extends Component {
  state = { isReady: false, isLogged: false, error: '' }

  fetchUser = async () => {
    const userId = 'u2kjfladadwddj9';
    try {
      await store.dispatch(fetchUser(userId));
      this.setState({ isReady: true, isLogged: true });
    } catch (error) {
      console.log('error', error);
      this.setState({ isReady: true, isLogged: false, error });
    }
  };

  componentDidMount() {
    this.fetchUser();
  }
  render() {
    const { isReady, isLogged } = this.state;
    if (!isReady) return <div>Loading</div>;
    if (!isLogged) return <div>Login Error</div>
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
