import React from 'react';
import {
    View,
    InfoRow,
    InfoColumnImage,
    InfoColumn,
    TextWrapper,
    ImgWrapper,
    Img,
    TopLine,
    Heading,
    Subtitle,
    Text,
} from './NBview.styled';

import { containerData } from '../../../Navigation/Pages/LandingPage/staticData/data/containerdata';

const NBview: React.FC = (props) => {
    const container1 = containerData.container1;
    const container2 = containerData.container2;
    const container3 = containerData.container3;
    const container4 = containerData.container4;
    const container5 = containerData.container5;
    const container6 = containerData.container6;

    return (
        <View>
            <InfoRow lightView={true} reverse={false}>
                <InfoColumn>
                    <TextWrapper>
                        <TopLine>
                            <Heading>{container1.title}</Heading>
                            <Subtitle>{container1.subtitle}</Subtitle>
                            <Text>{container1.description}</Text>
                        </TopLine>
                    </TextWrapper>
                </InfoColumn>
                <InfoColumnImage>
                    <ImgWrapper>
                        <Img
                            src={require('../../../Navigation/Pages/LandingPage/staticData/images/logo192.png')}
                        />
                    </ImgWrapper>
                </InfoColumnImage>
            </InfoRow>
            <InfoRow lightView={false} reverse={true}>
                <InfoColumn>
                    <TextWrapper>
                        <TopLine>
                            <Heading>{container2.title}</Heading>
                            <Subtitle>{container2.subtitle}</Subtitle>
                            <Text>{container2.description}</Text>
                        </TopLine>
                    </TextWrapper>
                </InfoColumn>
                <InfoColumnImage>
                    <ImgWrapper>
                        <Img
                            src={require('../../../Navigation/Pages/LandingPage/staticData/images/logo192.png')}
                        />
                    </ImgWrapper>
                </InfoColumnImage>
            </InfoRow>
            <InfoRow lightView={true} reverse={false}>
                <InfoColumn>
                    <TextWrapper>
                        <TopLine>
                            <Heading>{container3.title}</Heading>
                            <Subtitle>{container3.subtitle}</Subtitle>
                            <Text>{container3.description}</Text>
                        </TopLine>
                    </TextWrapper>
                </InfoColumn>
                <InfoColumnImage>
                    <ImgWrapper>
                        <Img
                            src={require('../../../Navigation/Pages/LandingPage/staticData/images/logo192.png')}
                        />
                    </ImgWrapper>
                </InfoColumnImage>
            </InfoRow>
            <InfoRow lightView={false} reverse={true}>
                <InfoColumn>
                    <TextWrapper>
                        <TopLine>
                            <Heading>{container4.title}</Heading>
                            <Subtitle>{container4.subtitle}</Subtitle>
                            <Text>{container4.description}</Text>
                        </TopLine>
                    </TextWrapper>
                </InfoColumn>
                <InfoColumnImage>
                    <ImgWrapper>
                        <Img
                            src={require('../../../Navigation/Pages/LandingPage/staticData/images/logo192.png')}
                        />
                    </ImgWrapper>
                </InfoColumnImage>
            </InfoRow>
            <InfoRow lightView={true} reverse={false}>
                <InfoColumn>
                    <TextWrapper>
                        <TopLine>
                            <Heading>{container5.title}</Heading>
                            <Subtitle>{container5.subtitle}</Subtitle>
                            <Text>{container5.description}</Text>
                        </TopLine>
                    </TextWrapper>
                </InfoColumn>
                <InfoColumnImage>
                    <ImgWrapper>
                        <Img
                            src={require('../../../Navigation/Pages/LandingPage/staticData/images/logo192.png')}
                        />
                    </ImgWrapper>
                </InfoColumnImage>
            </InfoRow>
            <InfoRow lightView={false} reverse={true}>
                <InfoColumn>
                    <TextWrapper>
                        <TopLine>
                            <Heading>{container6.title}</Heading>
                            <Subtitle>{container6.subtitle}</Subtitle>
                            <Text>{container6.description}</Text>
                        </TopLine>
                    </TextWrapper>
                </InfoColumn>
                <InfoColumnImage>
                    <ImgWrapper>
                        <Img
                            src={require('../../../Navigation/Pages/LandingPage/staticData/images/logo192.png')}
                        />
                    </ImgWrapper>
                </InfoColumnImage>
            </InfoRow>
        </View>
    );
};

export default NBview;
