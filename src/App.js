import React, { useState, useEffect } from "react";

import ExpenseStore, { ExpenseStoreConsumer } from "./stores/ExpenseStore";
import TopMenu from "./components/TopMenu";

import { MainContainer as Main } from "./components/MainContainer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
  render() {
    return (
      <React.Fragment>
        <ExpenseStore>
          <div className="App">
            <div
              className="d-flex"
              style={{
                padding: "20px",
                background: "#5bc5a7",
                color: "#fff",
                textShadow: "0px 1px 1px #000",
              }}
            >
              <div className="column-one">
                <h1>Wise Split</h1>
                <h2>Split yo bills!</h2>
              </div>
              <div className="column-two">
                <TopMenu />;
              </div>
            </div>

            <Main />
          </div>
        </ExpenseStore>
      </React.Fragment>
    );
  }
}
