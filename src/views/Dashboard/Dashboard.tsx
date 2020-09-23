import React from 'react';
import LoginButton from '../../components/UI/Login/LoginButton/LoginButton';

type DashboardProps = {
    toggleModal: () => void;
};

const Dashboard: React.FC<DashboardProps> = (props) => {
    const { toggleModal } = props;
    return (
        <>
            Dashboard goes here.
            <LoginButton />
            <button onClick={toggleModal}>Toggle modal</button>
        </>
    );
};

export default Dashboard;
