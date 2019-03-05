import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <div>
    <Helmet>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
        crossorigin="anonymous"
      />
    </Helmet>
    <App />
  </div>,
  document.getElementById("root")
);
