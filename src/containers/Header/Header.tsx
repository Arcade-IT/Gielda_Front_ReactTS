import React, { useState } from 'react';
import { Wrapper, ButtonsContainer, LogoContainer } from './Header.styled';
import HeaderButton from '../../components/UI/Header/HeaderButton/HeaderButton';
import { IconBell, IconCog, IconUser } from '../../icons';
import HeaderSearch from '../../components/UI/Header/HeaderSearch/HeaderSearch';

const Header: React.FC = (props) => {
    // TODO: handlers here
    const [searchInput, setSearchInput] = useState('');

    const notificationsHandler = () => {};

    const settingsHandler = () => {};

    const profileHandler = () => {};

    const inputChangedHandler = (event: React.ChangeEvent) => {
        const target = event.target as HTMLInputElement;
        setSearchInput(target.value);
    };

    const searchSubmitHandler = (input: string) => {};

    return (
        <Wrapper>
            <LogoContainer>Logo</LogoContainer>
            <HeaderSearch
                changed={(event: React.ChangeEvent) =>
                    inputChangedHandler(event)
                }
                submit={() => searchSubmitHandler(searchInput)}
            />
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
