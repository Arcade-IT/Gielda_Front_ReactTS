import React from 'react';
import { ThemeProvider } from 'styled-components';
import { colorTheme, fontTheme, shadowTheme } from '../../../themes';
import {
    MainContainer,
    BoxContainer,
    ImageContainer,
    TextWrapper,
    Text,
    Img,
    Heading,
    Subtitle,
    ButtonJoin
} from './About.styled';
import logo from '../../../../assets/logo192.png';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        <ThemeProvider theme={colorTheme}>
            <ThemeProvider theme={shadowTheme}>
                <ThemeProvider theme={fontTheme}>
                    <MainContainer>
                        <BoxContainer>
                            <ImageContainer>
                                <Img src={logo} />
                            </ImageContainer>
                            <TextWrapper>
                                <Heading>About us! </Heading>
                                <Subtitle>Arcade IT</Subtitle>
                                <Text>
                                    Contrary to popular belief, Lorem Ipsum is
                                    not simply random text. It has roots in a
                                    piece of classical Latin literature from 45
                                    BC, making it over 2000 years old. Richard
                                    McClintock, a Latin professor at
                                    Hampden-Sydney College in Virginia, looked
                                    up one of the more obscure Latin words,
                                    consectetur, from a Lorem Ipsum passage, and
                                    going through the cites of the word in
                                    classical literature, discovered the
                                    undoubtable source. Lorem Ipsum comes from
                                    sections 1.10.32 and 1.10.33 of "de Finibus
                                    Bonorum et Malorum" (The Extremes of Good
                                    and Evil) by Cicero, written in 45 BC. This
                                    book is a treatise on the theory of ethics,
                                    very popular during the Renaissance. The
                                    first line of Lorem Ipsum, "Lorem ipsum
                                    dolor sit amet..", comes from a line in
                                    section 1.10.32.
                                </Text>
                                <ButtonJoin to="/landingPage/contact">
                                    Contact us
                                </ButtonJoin>
                            </TextWrapper>
                        </BoxContainer>
                    </MainContainer>
                </ThemeProvider>
            </ThemeProvider>
        </ThemeProvider>
    );
};

export default About;
