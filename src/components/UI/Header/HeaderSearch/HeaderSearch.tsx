import React from 'react';
import { Container, SearchInput, Icon } from './HeaderSearch.styled';

interface InputProps {
    changed: (event: React.ChangeEvent) => void;
    submit: () => void;
}

const HeaderSearch: React.FC<InputProps> = (props) => {
    const { changed, submit } = props;

    const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            submit();
        }
    };
    return (
        <Container>
            <Icon className="fa fa-search" />
            <SearchInput
                onChange={(event: React.ChangeEvent) => changed(event)}
                onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) =>
                    onKeyDown(event)
                }
                placeholder={'Search...'}
            />
        </Container>
    );
};

export default HeaderSearch;
