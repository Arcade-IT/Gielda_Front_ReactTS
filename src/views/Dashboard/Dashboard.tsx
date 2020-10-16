import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

type DashboardProps = {
    toggleLogin: () => void;
    toggleSignup: () => void;
};

type Props = DashboardProps & PropsFromRedux;

const Dashboard: React.FC<Props> = (props) => {
    const { toggleLogin, toggleSignup, tempLogin } = props;
    return (
        <>
            Dashboard goes here.
            <button onClick={toggleLogin}>Toggle login</button>
            <button onClick={toggleSignup}>Toggle signup</button>
            <button onClick={tempLogin}>TEMP LOGIN</button>
        </>
    );
};

const mapDispatchToProps = {
    tempLogin: () => ({ type: 'TEMP_LOGIN' })
};

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Dashboard);
