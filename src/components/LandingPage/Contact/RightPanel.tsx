import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { colorTheme, fontTheme, shadowTheme } from '../../../themes';

import {
    RightContainer,
    Title,
    Subtitle,
    Input,
    InputMessage,
    ButtonSendMessage
} from './Contact.styled';

export interface BookmarkProps {
    clicked: boolean;
    onClick: any;
}

const RightPanel: React.FC<BookmarkProps> = (props) => {
    const [data, setData] = useState({ email: '', firstName: '', message: '' });

    const onChangeContact = (event: any) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    };
    const onSubmit = () => {
        alert(data.email);
        alert(data.firstName);
        alert(data.message);
    };

    return (
        <ThemeProvider theme={colorTheme}>
            <ThemeProvider theme={shadowTheme}>
                <ThemeProvider theme={fontTheme}>
                    <RightContainer
                        clicked={props.clicked}
                        onClick={props.onClick}
                        onSubmit={onSubmit}
                    >
                        <Title>Will you contact us?</Title>
                        <Subtitle>Send us a message!</Subtitle>
                        <Input
                            placeholder="Type in your email address"
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={onChangeContact}
                        />
                        <Input
                            placeholder="Type in your First Name"
                            type="Text"
                            name="firstName"
                            value={data.firstName}
                            onChange={onChangeContact}
                        />
                        <InputMessage
                            placeholder="Type in your Message"
                            name="message"
                            value={data.message}
                            onChange={onChangeContact}
                        />
                        <ButtonSendMessage type="submit" value={data.message}>
                            Send Message
                        </ButtonSendMessage>
                    </RightContainer>
                </ThemeProvider>
            </ThemeProvider>
        </ThemeProvider>
    );
};

export default RightPanel;
