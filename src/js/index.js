import React from "react";
import ReactDOM from "react-dom";
import "../styles/app.scss";
// import {TopAppBar, TopAppBarRow, TopAppBarSection, TopAppBarFixedAdjust, TopAppBarTitle} from 'rmwc';
import { Button } from '@rmwc/button';


class App extends React.Component {
  render() {
    return <Button raised>Themed!</Button>
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById("app")
);