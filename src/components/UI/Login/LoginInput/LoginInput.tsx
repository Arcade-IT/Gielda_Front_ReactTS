import React from 'react';
import { Input } from './LoginInput.styled';
import { capitalizeFirstLetter } from '../../../../shared/utility';

type InputProps = {
    name: string;
    type: string;
    changed: (event: React.ChangeEvent) => void;
    value: string;
};

const LoginInput: React.FC<InputProps> = (props) => {
    const { name, type, changed, value } = props;

    return (
        <Input
            name={name}
            onChange={(event: React.ChangeEvent) => changed(event)}
            placeholder={capitalizeFirstLetter(type)}
            value={value}
            type={type}
        />
    );
};

export default LoginInput;
