import React from 'react';
import { Wrapper } from './Sidebar.styled';
import SidebarPanel from '../../components/UI/Sidebar/SidebarPanel/SidebarPanel';

const Sidebar: React.FC = (props) => {
    return (
        <Wrapper>
            Sidebar will be placed here.
            <SidebarPanel>Panel #1</SidebarPanel>
            <SidebarPanel>Panel #2</SidebarPanel>
            <SidebarPanel>Panel #3</SidebarPanel>
        </Wrapper>
    );
};

export default Sidebar;
