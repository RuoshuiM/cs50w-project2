import React from 'react';
import Card, {
    CardPrimaryContent,
    CardMedia,
    CardActions,
    CardActionButtons,
    CardActionIcons
} from "@material/react-card";

import {
    Body1,
    Body2,
    Button,
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


export function Welcome() {
    return (
        <Card className='welcome-card'>
            <Headline3 className='welcome-title'>Welcome to Flack</Headline3>
            <main>
                <Body1>
                    This is a toy version of an online messaging service, similar in spirit to Slack. You can create, join, and communicate in channels (chatrooms).
                </Body1>
                
            </main>

            <CardActions>
                <CardActionButtons>
                    <button>Click Me</button>
                </CardActionButtons>

                <CardActionIcons>
                    <i>Click Me Too!</i>
                </CardActionIcons>
            </CardActions>
        </Card>
    );
}