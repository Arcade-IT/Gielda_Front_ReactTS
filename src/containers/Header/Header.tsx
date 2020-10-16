import React from 'react';
import { Wrapper, ButtonsContainer, LogoContainer } from './Header.styled';
import HeaderButton from '../../components/UI/Header/HeaderButton/HeaderButton';
import { IconBell, IconCog, IconUser } from '../../icons';

const Header: React.FC = (props) => {
    // TODO: handlers here

    const notificationsHandler = () => {};

    const settingsHandler = () => {};

    const profileHandler = () => {};

    return (
        <Wrapper>
            <LogoContainer>Logo</LogoContainer>
            <ButtonsContainer>
                <HeaderButton
                    clicked={notificationsHandler}
                    icon={
                        <IconBell
                            size={24}
                            color={'#f4f4f4'}
                            title={'Notifications'}
                        />
                    }
                />
                <HeaderButton
                    clicked={settingsHandler}
                    icon={
                        <IconCog
                            size={24}
                            color={'#f4f4f4'}
                            title={'Settings'}
                        />
                    }
                />
                <HeaderButton
                    clicked={profileHandler}
                    icon={
                        <IconUser
                            size={24}
                            color={'#f4f4f4'}
                            title={'Your profile'}
                        />
                    }
                />
            </ButtonsContainer>
        </Wrapper>
    );
};

export default Header;
