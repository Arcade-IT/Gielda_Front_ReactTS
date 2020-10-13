import React from 'react';
import { ThemeProvider } from 'styled-components';
import { colorTheme, fontTheme, shadowTheme } from '../../../themes';
import {
    Container,
    Heading,
    Subtitle,
    View,
    Text,
    InfoContainer,
    ButtonContainer,
    ButtonLink,
    Image,
    ImageContainer
} from './Services.styled';
import {IconLight} from '../../../assets';
import { containerData } from '../../../static/Landing/servicesData';

interface dataInterface {
    title: string;
    subtitle: string;
    shortDescription: string;
    id: number;
}
const Services: React.FC = () => {
    const data: dataInterface[] = containerData;

    return (
        <ThemeProvider theme={colorTheme}>
            <ThemeProvider theme={shadowTheme}>
                <ThemeProvider theme={fontTheme}>
                    <View>
                        {data.map((info: dataInterface) => (
                            <Container key={info.id}>
                                <InfoContainer>
                                    <Heading>{info.title}</Heading>
                                    <Subtitle>{info.subtitle}</Subtitle>
                                    <Text>{info.shortDescription}</Text>
                                    <ImageContainer>
                                        <Image src={IconLight} />
                                    </ImageContainer>
                                </InfoContainer>
                                <ButtonContainer>
                                    <ButtonLink to="/">Read More</ButtonLink>
                                </ButtonContainer>
                            </Container>
                        ))}
                    </View>
                </ThemeProvider>
            </ThemeProvider>
        </ThemeProvider>
    );
};

export default Services;
