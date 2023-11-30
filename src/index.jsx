import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Layout from "./components/layout";
import Routes from "./routes";

import "./assets/styles/bootstrap.css";
import "./assets/styles/bootstrap.overrides.css";
import "./assets/styles/main.scss";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
}

render(<App />, document.getElementById("root"));
