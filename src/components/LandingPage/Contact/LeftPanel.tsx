import React from 'react';
import { ThemeProvider } from 'styled-components';
import { colorTheme, fontTheme, shadowTheme } from '../../../themes';
import {
    addressesCity,
    addressesStreat,
    addressesPostal,
    email,
    phoneNumber
} from '../../../static/Landing/contactData';

import { LogoArcade } from '../../../assets/';

import {
    LeftContainer,
    ImageContainer,
    Image,
    TextPane,
    ContactItem,
    ContactText,
    ContactAddress,
    IconContainer,
    IconButton,
    IconButtonTitle
} from './Contact.styled';
import { IconMail, SlackIcon } from '../../../icons';
import { FacebookCircularIcon } from '../../../icons/FacebookCircularIcon/FacebookCircular';

export interface BookmarkProps {
    clicked: boolean;
    onClick: () => void;
}

const LeftPanel: React.FC<BookmarkProps> = (props) => {
    return (
        <ThemeProvider theme={colorTheme}>
            <ThemeProvider theme={shadowTheme}>
                <ThemeProvider theme={fontTheme}>
                    <LeftContainer
                        clicked={props.clicked}
                        onClick={props.onClick}
                    >
                        <ImageContainer>
                            <Image src={LogoArcade} />
                        </ImageContainer>
                        <TextPane>
                            <ContactItem>
                                <IconMail
                                    size={25}
                                    color={'#fff'}
                                    title={'Notifications'}
                                />
                                <ContactText>
                                    Email address: {email}
                                </ContactText>
                            </ContactItem>
                            <ContactItem>
                                <IconMail
                                    size={25}
                                    color={'#fff'}
                                    title={'Notifications'}
                                />
                                <ContactText>
                                    Phone Number: {phoneNumber}
                                </ContactText>
                            </ContactItem>
                            <ContactItem>
                                <IconMail
                                    size={25}
                                    color={'#fff'}
                                    title={'Notifications'}
                                />
                                <ContactText>Address:</ContactText>
                                <ContactAddress>
                                    <ContactText>
                                        Postal Code: {addressesPostal}
                                    </ContactText>
                                    <ContactText>
                                        City: {addressesCity}
                                    </ContactText>
                                    <ContactText>
                                        Address: {addressesStreat}
                                    </ContactText>
                                </ContactAddress>
                            </ContactItem>
                            <IconContainer>
                                <IconButton
                                    href="https://www.facebook.com/groups/298957864726354"
                                    target="_blank"
                                >
                                    <FacebookCircularIcon
                                        title="fbc"
                                        color="#fff"
                                        size={20}
                                    />
                                    <IconButtonTitle>
                                        ArcadeIt - praktyki
                                    </IconButtonTitle>
                                </IconButton>
                                <IconButton
                                    href="https://www.facebook.com/groups/298957864726354"
                                    target="_blank"
                                >
                                    <SlackIcon
                                        title="fbc"
                                        color="#fff"
                                        size={20}
                                    />
                                    <IconButtonTitle>
                                        ArcadeIt - praktyki
                                    </IconButtonTitle>
                                </IconButton>
                            </IconContainer>
                        </TextPane>
                    </LeftContainer>
                </ThemeProvider>
            </ThemeProvider>
        </ThemeProvider>
    );
};

export default LeftPanel;
