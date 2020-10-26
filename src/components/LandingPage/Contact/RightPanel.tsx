import React from 'react';
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
    return (
        <ThemeProvider theme={colorTheme}>
            <ThemeProvider theme={shadowTheme}>
                <ThemeProvider theme={fontTheme}>
                    <RightContainer
                        clicked={props.clicked}
                        onClick={props.onClick}
                    >
                        <Title>Will you contact us?</Title>
                        <Subtitle>Send us a message!</Subtitle>
                        <Input
                            placeholder="Type in your email address"
                            type="email"
                        />
                        <Input
                            placeholder="Type in your First Name"
                            type="Text"
                        />
                        <InputMessage placeholder="Type in your Message" />
                        <ButtonSendMessage type="submit">
                            Send Message
                        </ButtonSendMessage>
                    </RightContainer>
                </ThemeProvider>
            </ThemeProvider>
        </ThemeProvider>
    );
};

export default RightPanel;
