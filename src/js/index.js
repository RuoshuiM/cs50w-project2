import React from "react";
import ReactDOM from "react-dom";
import "../styles/app.scss";

// SWITCH to OFFICIAL LIB
// import { TopAppBar, TopAppBarRow, TopAppBarSection, TopAppBarFixedAdjust, TopAppBarTitle } from 'rmwc';
// import { Button } from '@rmwc/button';
// import { Drawer, DrawerHeader, DrawerContent, DrawerTitle, DrawerSubtitle, DrawerAppContent } from '@rmwc/drawer';
// import { List, ListItem, ListItemGraphic, ListItemPrimaryText, ListItemText } from '@rmwc/list';


import Drawer, { DrawerAppContent, DrawerContent, DrawerHeader, DrawerTitle } from '@material/react-drawer';
import List, { ListItem, ListItemGraphic, ListItemText } from '@material/react-list';
import Button from '@material/react-button';
import MaterialIcon from '@material/react-material-icon';

import { storageAvailable } from './localStorage';
import { Welcome } from './welcome';

// import io from 'socket.io-client';

// const socket = io();

function App() {
  if (storageAvailable('localStorage')) {
    // Let's use local storage
  } else {
    // user will lose their username the next time they come
  }
  return <Welcome />;
}

// function App() {
//   const [open, setOpen] = React.useState(true);
//   const [selectedIndex, setSelectedIndex] = React.useState(0);
//   return (
//     <div className='drawer-container'>
//       <Drawer
//         // dismissible
//         // open={open}
//         className='drawer'
//       >

//          <DrawerHeader>
//            <DrawerTitle>My Channels</DrawerTitle>
//          </DrawerHeader>

//          <DrawerContent>
//            <List singleSelection selectedIndex={selectedIndex} handleSelect={index => setSelectedIndex(index)}>
//              <ListItem>
//                <ListItemGraphic graphic={<MaterialIcon icon='inbox' />} />
//                <ListItemText primaryText='Index' />
//              </ListItem>
//              <ListItem>
//                <ListItemGraphic graphic={<MaterialIcon icon='send' />} />
//                <ListItemText primaryText='Outgoing' />
//              </ListItem>
//              <ListItem>
//                <ListItemGraphic graphic={<MaterialIcon icon='drafts' />} />
//                <ListItemText primaryText='Drafts'/>
//              </ListItem>
//            </List>
//          </DrawerContent>
//       </Drawer>
//       <DrawerAppContent className='drawer-app-content'>
//         Your really cool app content here
//       </DrawerAppContent>
//     </div>
//   );
// }


// ========================================

ReactDOM.render(
  <App />,
  document.getElementById("app")
);