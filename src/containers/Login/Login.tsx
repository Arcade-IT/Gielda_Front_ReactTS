import React, { useRef, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Wrapper, Row, Warning, LoginContainer, Text } from './Login.styled';
import { CSSTransition } from 'react-transition-group';
import LoginButton from '../../components/UI/Login/LoginButton/LoginButton';
import LoginInput from '../../components/UI/Login/LoginInput/LoginInput';
import { updateObject } from '../../shared/utility';
import '../../transitions/transitions.css';
import LoginImage from '../../components/UI/Login/LoginImage/LoginImage';
import axios from 'axios';

type LoginProps = {
    clickedCancel(): void;
    isLogin?: boolean;
};

const Login: React.FC<LoginProps> = (props) => {
    const { clickedCancel, isLogin } = props;
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });
    const [signupData, setSignupData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
    const [warning, setWarning] = useState({
        shown: false,
        message: ' '
    });

    const validateEmail = (email: string) => {
        const pattern = /\S+@\S+\.\S+/;
        return pattern.test(email.toLowerCase());
    };

    const validatePassword = (password: string) => {
        return password.length > 5;
    };

    const inputChangedHandler = (event: React.ChangeEvent, login?: boolean) => {
        const target = event.target as HTMLInputElement;
        const updatedData = updateObject(login ? loginData : signupData, {
            [target.name]: target.value
        });

        if (target.name === 'email') {
            if (!validateEmail(target.value)) {
                if (!warning.shown) {
                    setWarning(
                        updateObject(warning, {
                            shown: true,
                            message: 'Please enter valid email address.'
                        })
                    );
                }
            } else {
                setWarning(updateObject(warning, { shown: false }));
            }
        } else if (target.name === 'password') {
            if (!validatePassword(target.value)) {
                if (!warning.shown) {
                    setWarning(
                        updateObject(warning, {
                            shown: true,
                            message:
                                'Password must be at least 6 characters long.'
                        })
                    );
                }
            } else {
                setWarning(updateObject(warning, { shown: false }));
            }
        }

        login ? setLoginData(updatedData) : setSignupData(updatedData);
    };

    const registerSample = () => {
        axios
            .post('https://localhost:443/api/user/register', {
                email: 'przemowiec@test.com',
                firstName: 'Przemo',
                lastName: 'Reducha',
                password: 'twojaStara'
            })
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
    };

    const login = (
        <>
            <Row>
                <Text>
                    Please login, so you can access your account and all of our
                    app's features.
                </Text>
            </Row>
            <Row>
                <LoginInput
                    name="email"
                    type="email"
                    changed={(event: React.ChangeEvent) =>
                        inputChangedHandler(event, true)
                    }
                    value={loginData.email}
                />
            </Row>
            <Row>
                <LoginInput
                    name="password"
                    type="password"
                    changed={(event: React.ChangeEvent) =>
                        inputChangedHandler(event, true)
                    }
                    value={loginData.password}
                />
            </Row>
        </>
    );

    const signup = (
        <>
            <Row>
                <Text>
                    To take full advantage of our app's features, please fill
                    out below form to create your account.
                </Text>
            </Row>
            <Row>
                <LoginInput
                    name="first name"
                    type="first name"
                    changed={(event: React.ChangeEvent) =>
                        inputChangedHandler(event)
                    }
                    value={signupData.firstName}
                />
            </Row>
            <Row>
                <LoginInput
                    name="last name"
                    type="last name"
                    changed={(event: React.ChangeEvent) =>
                        inputChangedHandler(event)
                    }
                    value={signupData.lastName}
                />
            </Row>
            <Row>
                <LoginInput
                    name="email"
                    type="email"
                    changed={(event: React.ChangeEvent) =>
                        inputChangedHandler(event)
                    }
                    value={signupData.email}
                />
            </Row>
            <Row>
                <LoginInput
                    name="password"
                    type="password"
                    changed={(event: React.ChangeEvent) =>
                        inputChangedHandler(event)
                    }
                    value={signupData.password}
                />
            </Row>
        </>
    );

    const nodeRef = useRef(null);

    return (
        <Wrapper>
            <LoginImage />
            <LoginContainer>
                <CSSTransition
                    nodeRef={nodeRef}
                    in={warning.shown}
                    classNames="opacity"
                    timeout={400}
                    mountOnEnter
                    unmountOnExit
                >
                    <Warning ref={nodeRef}>{warning.message}</Warning>
                </CSSTransition>
                {isLogin ? login : signup}
                <Row>
                    <LoginButton clicked={registerSample}>Login</LoginButton>
                    <LoginButton clicked={clickedCancel}>Cancel</LoginButton>
                </Row>
            </LoginContainer>
        </Wrapper>
    );
};

export default Login;
