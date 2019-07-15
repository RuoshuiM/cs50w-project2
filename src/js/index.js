import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../styles/app.scss";

// SWITCH to OFFICIAL LIB
/*
import { TopAppBar, TopAppBarRow, TopAppBarSection, TopAppBarFixedAdjust, TopAppBarTitle } from 'rmwc';
import { Button } from '@rmwc/button';
import { Drawer, DrawerHeader, DrawerContent, DrawerTitle, DrawerSubtitle, DrawerAppContent } from '@rmwc/drawer';
import { List, ListItem, ListItemGraphic, ListItemPrimaryText, ListItemText } from '@rmwc/list';
*/

import UsernameStore from './localStorage';
import Welcome from './welcome';
import Chat from './chat';

// import io from 'socket.io-client';

// const socket = io();

function App() {
  const [username, setUsername] = useState('');
  if (!username) {
    if (!(UsernameStore.isAvailable)) {
      return <Welcome setUsername={setUsername} />;
    } else {
      let name = UsernameStore.getUsername();
      console.log(name);
      if (name) {
        setUsername(UsernameStore.getUsername());
      } else {
        return <Welcome setUsername={setUsername} />;
      }
    }
  }
  return <Chat username={username} />;
}

// function TopBar(props) {
//   return (
//     <div>
      
//     </div>
//   );
// }

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById("app")
);