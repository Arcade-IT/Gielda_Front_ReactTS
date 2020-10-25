import React from 'react';
import { Wrapper } from './Sidebar.styled';
import SidebarPanel from '../../components/UI/Sidebar/SidebarPanel/SidebarPanel';
import {
    IconBook,
    IconDollar,
    IconHome,
    IconSwap,
    IconUnread
} from '../../icons';

const Sidebar: React.FC = (props) => {
    return (
        <Wrapper>
            <SidebarPanel
                icon={<IconHome size={18} title={'Dashboard'} color={'#fff'} />}
            >
                Dashboard
            </SidebarPanel>
            <SidebarPanel
                icon={<IconUnread size={18} title={'History'} color={'#fff'} />}
            >
                History
            </SidebarPanel>
            <SidebarPanel
                icon={<IconDollar size={18} title={'Assets'} color={'#fff'} />}
            >
                Assets
            </SidebarPanel>
            <SidebarPanel
                icon={<IconBook size={18} title={'Portfolio'} color={'#fff'} />}
            >
                Portfolio
            </SidebarPanel>
            <SidebarPanel
                icon={
                    <IconSwap size={18} title={'Transactions'} color={'#fff'} />
                }
            >
                Transactions
            </SidebarPanel>
        </Wrapper>
    );
};

export default Sidebar;
