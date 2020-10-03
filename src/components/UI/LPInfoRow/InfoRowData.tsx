import React from 'react';

import {
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
} from './InfoRowData.styled';

interface dataInterface {
    title: string;
    subtitle: string;
    description: string;
    id: number;
}

export const InfoRowData: React.FC<{ data: dataInterface[] }> = (props) => {
    const { data } = props;
    return (
        <div>
            {data.map((info: dataInterface) => {
                let reverse = info.id % 2 ? true : false;
                return (
                    <InfoRow
                        lightView={reverse}
                        reverse={reverse}
                        key={info.id}
                    >
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine>
                                    <Heading>{info.title}</Heading>
                                    <Subtitle>{info.subtitle}</Subtitle>
                                    <Text>{info.description}</Text>
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
                );
            })}
        </div>
    );
};
