import React from 'react';
import Card, {
    // CardPrimaryContent,
    // CardMedia,
    CardActions,
    CardActionButtons,
    // CardActionIcons
} from "@material/react-card";

import {
    Body1,
    // Body2,
    // Caption,
    // Headline1,
    // Headline2,
    Headline3,
    // Headline4,
    // Headline5,
    // Headline6,
    // Overline,
    // Subtitle1,
    // Subtitle2,
} from '@material/react-typography';

import TextField, { HelperText, Input, CharacterCounter } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import Button from '@material/react-button';

export function Welcome() {
    const [name, setName] = React.useState('');
    const [isValid, setIsValid] = React.useState(true);
    const handleInputChange = e => {
        let username = e.currentTarget.value;

        setIsValid(isUsernameValid(username));
        setName(e.currentTarget.value);
    }
    const handleSubmit = e => {
        e.preventDefault();

        // Prevent user from submitting empty username
        let valid = isUsernameValid(name);
        setIsValid(valid);
        if (!valid) return false;

        // logic for storing username
        console.log("Form submitted!");
    }

    const renderHelperText = () => {
        if (isValid) {
            return (<HelperText>Please enter your Username</HelperText>)
        } else {
            return (
                <HelperText
                    isValid={isValid}
                    isValidationMessage
                    validation
                >
                    Must not contain space
                </HelperText>
            );
        }
    }
    return (
        <Card className='welcome-card'>
            <Headline3 className='welcome-title'>Welcome to Flack</Headline3>
            <main>
                <Body1>
                    This is a toy version of an online messaging service, similar in spirit to Slack. You can create, join, and communicate in channels (chatrooms).
                </Body1>
                <Body1>
                    To get started, enter your username below and click "GO!"
                </Body1>

                <form className='username-field' onSubmit={handleSubmit}>
                    <div>
                        <TextField
                            label='Username'
                            outlined
                            leadingIcon={<MaterialIcon icon='face' />}
                            name='username'
                            helperText={renderHelperText()}
                            characterCounter={<CharacterCounter />}

                        >
                            <Input
                                value={name}
                                onChange={handleInputChange}
                                maxLength={20}
                                isValid={isValid}
                            />
                        </TextField>
                    </div>
                    <Button
                        type='submit'
                        outlined
                    >GO!</Button>
                </form>
            </main>

            <CardActions>
                <CardActionButtons>
                </CardActionButtons>
            </CardActions>
        </Card>
    );
}

function isUsernameValid(username) {
    // username should not include space
    return !(username.length === 0 || (username.includes(' ')));
}


class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isValid: true, username: '' };
        this.onChange = this.onChange.bind(this);
        this.renderHelperText = this.renderHelperText.bind(this);
    }
    onChange(e) {
        const { value } = e.target;
        this.setState({ isValid: value.includes('@'), username: value });
    }
    renderHelperText() {
        const { isValid } = this.state;
        if (isValid) {
            return (<HelperText>Please enter your Username</HelperText>);
        } else {
            return (
                <HelperText
                    isValid={isValid}
                    isValidationMessage
                    validation
                >
                    Your Username must contain an @
          </HelperText>
            );
        }
    }
    render() {
        return (
            <div>
                <TextField
                    box
                    label='Username'
                    helperText={this.renderHelperText()}
                >
                    <Input
                        isValid={this.state.isValid}
                        name='username'
                        onChange={this.onChange}
                        value={this.state.username}
                    />
                </TextField>
            </div>
        );
    }
}