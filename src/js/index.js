import React from "react";
import ReactDOM from "react-dom";
import "../styles/app.scss";
// import {TopAppBar, TopAppBarRow, TopAppBarSection, TopAppBarFixedAdjust, TopAppBarTitle} from 'rmwc';
import { Button } from '@rmwc/button';
import io from 'socket.io-client';

const socket = io();

class App extends React.Component {
  render() {
    return <Button label='raised!' raised></Button>
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById("app")
);