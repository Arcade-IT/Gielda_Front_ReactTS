import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

const Dashboard: React.FC<PropsFromRedux> = (props) => {
    const { tempLogin } = props;

    const tempLogoutHandler = () => {
        tempLogin();
        localStorage.removeItem('loggedIn');
    };

    return (
        <>
            Dashboard goes here.
            <button onClick={tempLogoutHandler}>LOGOUT</button>
        </>
    );
};

const mapDispatchToProps = {
    tempLogin: () => ({ type: 'TEMP_LOGIN' })
};

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Dashboard);
