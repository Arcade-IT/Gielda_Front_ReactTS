import React from 'react';
import {
    Wrapper,
    Main,
    ViewWraper,
    TopSection,
    LogoContainer,
    ButtonContainer,
    CustomButton,
    ContentContainer,
    ContentLeft,
    ContentRight,
    TitleAppContainer,
} from './Landingpage.styled';
import { ThemeProvider } from 'styled-components';
import { colorTheme, shadowTheme, fontTheme } from '../../../themes';

const Landingpage: React.FC = (props) => {
    return (
        <ThemeProvider theme={colorTheme}>
            <Wrapper>
                <ThemeProvider theme={shadowTheme}>
                    <ThemeProvider theme={fontTheme}>
                        <Main>
                            <ViewWraper>
                                <TopSection>
                                    <LogoContainer>Logo</LogoContainer>
                                    <ButtonContainer>
                                        <CustomButton>Home</CustomButton>
                                        <CustomButton>About us</CustomButton>
                                        <CustomButton>Services</CustomButton>
                                        <CustomButton>App</CustomButton>
                                        <CustomButton>Contact</CustomButton>
                                        <CustomButton>More Info</CustomButton>
                                    </ButtonContainer>
                                </TopSection>
                                <ContentContainer>
                                    <ContentLeft>
                                        <TitleAppContainer>
                                            <p>Forex</p>
                                            <p>Arcade IT</p>
                                        </TitleAppContainer>
                                    </ContentLeft>
                                    <ContentRight>hello</ContentRight>
                                </ContentContainer>
                            </ViewWraper>
                        </Main>
                    </ThemeProvider>
                </ThemeProvider>
            </Wrapper>
        </ThemeProvider>
    );
};

export default Landingpage;
