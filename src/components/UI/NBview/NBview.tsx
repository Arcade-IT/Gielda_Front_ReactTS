import React from 'react';
import {
    View,
    InfoRow,
    InfoColumn,
    TextWrapper,
    ImgWrapper,
    Img,
    TopLine,
    Heading,
    Subtitle,
    Text,
} from './NBview.styled';

const NBview: React.FC = (props) => {
    return (
        <View>
            <InfoRow lightView={true} reverse={false}>
                <InfoColumn>
                    <TextWrapper>
                        <TopLine>
                            <Heading>Heading</Heading>
                            <Subtitle>Subtitle</Subtitle>
                            <Text>Hellos</Text>
                        </TopLine>
                    </TextWrapper>
                </InfoColumn>
                <InfoColumn>
                    <ImgWrapper>
                        <Img
                            src={require('../../../Navigation/Pages/LandingPage/images/logo192.png')}
                        />
                    </ImgWrapper>
                </InfoColumn>
            </InfoRow>
            <InfoRow lightView={false} reverse={true}>
                <InfoColumn>
                    <TextWrapper>
                        <TopLine>
                            <Heading>Heading</Heading>

                            <Subtitle>Subtitle</Subtitle>
                            <Text>Hellos</Text>
                        </TopLine>
                    </TextWrapper>
                </InfoColumn>
                <InfoColumn>
                    <ImgWrapper>
                        <Img
                            src={require('../../../Navigation/Pages/LandingPage/images/logo192.png')}
                        />
                    </ImgWrapper>
                </InfoColumn>
            </InfoRow>
            <InfoRow lightView={true} reverse={true}>
                <InfoColumn>
                    <TextWrapper>
                        <TopLine>
                            <Heading>Heading</Heading>
                            <Subtitle>Subtitle</Subtitle>
                            <Text>Text</Text>
                        </TopLine>
                    </TextWrapper>
                </InfoColumn>
                <InfoColumn>
                    <ImgWrapper>
                        <Img
                            src={require('../../../Navigation/Pages/LandingPage/images/logo192.png')}
                        />
                    </ImgWrapper>
                </InfoColumn>
            </InfoRow>
            <InfoRow lightView={false} reverse={false}>
                <InfoColumn>
                    <TextWrapper>
                        <TopLine>
                            <Heading>Heading</Heading>
                            <Subtitle>Subtitle</Subtitle>
                            <Text>Hellos</Text>
                        </TopLine>
                    </TextWrapper>
                </InfoColumn>
                <InfoColumn>
                    <ImgWrapper>
                        <Img
                            src={require('../../../Navigation/Pages/LandingPage/images/logo192.png')}
                        />
                    </ImgWrapper>
                </InfoColumn>
            </InfoRow>
        </View>
    );
};

export default NBview;
