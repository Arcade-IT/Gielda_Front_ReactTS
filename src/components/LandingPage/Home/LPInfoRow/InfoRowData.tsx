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
    ButtonLink,
    BouttonContainer
} from './InfoRowData.styled';
import logo from '../../../../../assets/logo192.png';

interface dataInterface {
    title: string;
    subtitle: string;
    description: string;
    id: number;
    link: string;
    buttonTitle: string;
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
                                <BouttonContainer>
                                    <ButtonLink to={info.link}>
                                        {info.buttonTitle}
                                    </ButtonLink>
                                </BouttonContainer>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumnImage>
                            <ImgWrapper>
                                <Img src={logo} />
                            </ImgWrapper>
                        </InfoColumnImage>
                    </InfoRow>
                );
            })}
        </div>
    );
};
