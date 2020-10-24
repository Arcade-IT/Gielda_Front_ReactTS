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
    ButtonContainer,
    Container
} from './InfoRowData.styled';
import { IconDark } from '../../../../assets';

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
        <Container>
            {data.map((info: dataInterface) => {
                let reverse = !!(info.id % 2);
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
                                <ButtonContainer>
                                    <ButtonLink to={info.link}>
                                        {info.buttonTitle}
                                    </ButtonLink>
                                </ButtonContainer>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumnImage>
                            <ImgWrapper>
                                <Img src={IconDark} />
                            </ImgWrapper>
                        </InfoColumnImage>
                    </InfoRow>
                );
            })}
        </Container>
    );
};
