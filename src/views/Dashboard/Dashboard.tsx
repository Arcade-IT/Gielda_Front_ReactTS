import React from 'react';

type DashboardProps = {
    toggleLogin: () => void;
    toggleSignup: () => void;
};

const Dashboard: React.FC<DashboardProps> = (props) => {
    const { toggleLogin, toggleSignup } = props;
    return (
        <>
            Dashboard goes here.
            <button onClick={toggleLogin}>Toggle login</button>
            <button onClick={toggleSignup}>Toggle signup</button>
        </>
    );
};

export default Dashboard;
