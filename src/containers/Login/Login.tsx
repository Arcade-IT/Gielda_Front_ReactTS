import React, { useState } from 'react';
import { Wrapper, Row, Warning, LoginContainer, Text } from './Login.styled';
import { CSSTransition } from 'react-transition-group';
import LoginButton from '../../components/UI/Login/LoginButton/LoginButton';
import LoginInput from '../../components/UI/Login/LoginInput/LoginInput';
import { updateObject } from '../../shared/utility';
import '../../transitions/transitions.css';
import LoginImage from '../../components/UI/Login/LoginImage/LoginImage';

type LoginProps = {
    clickedCancel(): void;
    isLogin?: boolean;
};

const Login: React.FC<LoginProps> = (props) => {
    const { clickedCancel, isLogin } = props;
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });
    const [signupData, setSignupData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });
    const [warning, setWarning] = useState({
        shown: false,
        message: ' ',
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
            [target.name]: target.value,
        });

        if (target.name === 'email') {
            if (!validateEmail(target.value)) {
                if (!warning.shown) {
                    setWarning(
                        updateObject(warning, {
                            shown: true,
                            message: 'Please enter valid email address.',
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
                                'Password must be at least 6 characters long.',
                        })
                    );
                }
            } else {
                setWarning(updateObject(warning, { shown: false }));
            }
        }

        login ? setLoginData(updatedData) : setSignupData(updatedData);
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

    return (
        <Wrapper>
            <LoginImage />
            <LoginContainer>
                <CSSTransition
                    in={warning.shown}
                    classNames="opacity"
                    timeout={400}
                    mountOnEnter
                    unmountOnExit
                >
                    <Warning>{warning.message}</Warning>
                </CSSTransition>
                {isLogin ? login : signup}
                <Row>
                    <LoginButton>Login</LoginButton>
                    <LoginButton clicked={clickedCancel}>Cancel</LoginButton>
                </Row>
            </LoginContainer>
        </Wrapper>
    );
};

export default Login;
