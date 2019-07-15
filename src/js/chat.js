import React from 'react';
import TopAppBar, { TopAppBarFixedAdjust, TopAppBarRow, TopAppBarSection, TopAppBarIcon, TopAppBarTitle } from '@material/react-top-app-bar';
import Drawer, { DrawerAppContent, DrawerContent, DrawerHeader, DrawerTitle } from '@material/react-drawer';
import List, { ListItem, ListItemGraphic, ListItemText, ListGroup, ListGroupSubheader, ListDivider } from '@material/react-list';
import MaterialIcon from '@material/react-material-icon';
import {
  Body1,
  Body2,
  Caption,
  Headline1,
  Headline2,
  Headline3,
  Headline4,
  Headline5,
  Headline6,
  Overline,
  Subtitle1,
  Subtitle2,
} from '@material/react-typography';

import { Scrollbars } from 'react-custom-scrollbars';

function Chat(props) {
  const [open, setOpen] = React.useState(true);
  const [selectedChannelIndex, setSelectedChannelIndex] = React.useState(0);
  const channels = generateChannels(0);

  let channelList;

  if (channels.length === 0) {
    channelList = <Body2 className='no-channel-text'>No channels to display</Body2>;
  } else {
    channelList = (
      <Scrollbars autoHide autoHideTimeout={900} autoHideDuration={200}>
        <List singleSelection selectedIndex={selectedChannelIndex} handleSelect={index => setSelectedChannelIndex(index)}>
          {
            channels.map((channel, i) => {
              return (
                <ListItem key={channel.id}>
                  <ListItemGraphic graphic={<MaterialIcon icon={selectedChannelIndex === i ? 'chat' : 'chat_bubble_outline'} />} />
                  <ListItemText primaryText={channel.name} />
                </ListItem>
              )
            })
          }
        </List>
      </Scrollbars>);
  }

  return (
    <div className='drawer-container'>
      <Drawer
        dismissible
        open={open}
        className='drawer'
      >

        <DrawerHeader>
          <DrawerTitle tag={Headline5}>{props.username}</DrawerTitle>
          <Overline>My Channels</Overline>
        </DrawerHeader>

        <DrawerContent>
          {channelList}
        </DrawerContent>
      </Drawer>
      <DrawerAppContent className='drawer-app-content'>
        <TopAppBar>
          <TopAppBarRow>
            <TopAppBarSection align='start'>
              <TopAppBarIcon navIcon tabIndex={0}>
                <MaterialIcon hasRipple icon={open ? 'keyboard_arrow_left' : 'menu'} onClick={() => setOpen(!open)} />
              </TopAppBarIcon>
              <TopAppBarTitle>{channels.length ? channels[selectedChannelIndex].name : "No available channels"}</TopAppBarTitle>
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>
        <TopAppBarFixedAdjust>
          My exciting content!
        </TopAppBarFixedAdjust>
      </DrawerAppContent>
    </div>
  );
}


function SideBar(props) {

}

function ChatView(props) {

}

function generateChannels(num) {
  let channels = [];
  for (let i = 0; i < num; i++) {
    channels.push({
      name: `channel ${i}`,
      id: i,
    });
  }
  return channels;
}

export default Chat;