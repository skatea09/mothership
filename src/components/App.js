import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { fetchUser } from '../redux/actions';
import store from "../redux/store";

class App extends Component {
  componentDidMount() {
    store.dispatch(fetchUser('u2kjfladadwddj9'))
  }
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div className="App">
            <header className="App-header text-red">
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
