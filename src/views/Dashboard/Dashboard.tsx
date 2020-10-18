import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

const Dashboard: React.FC<PropsFromRedux> = (props) => {
    const { tempLogin } = props;
    return (
        <>
            Dashboard goes here.
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
