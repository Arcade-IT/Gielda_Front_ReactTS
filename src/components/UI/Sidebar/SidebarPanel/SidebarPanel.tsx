import React, { useState } from 'react';
import { Panel, IconContainer, Label } from './SidebarPanel.styled';

interface PanelProps {
    icon: React.ReactElement;
}

const SidebarPanel: React.FC<PanelProps> = (props) => {
    const { icon, children } = props;

    const [iconColor, setIconColor] = useState('#6f7584');
    const iconHoverHandler = (active: boolean) => {
        if (active) {
            setIconColor('#f4f4f4');
        } else {
            setIconColor('#6f7584');
        }
    };
    return (
        <Panel
            onMouseEnter={() => iconHoverHandler(true)}
            onMouseLeave={() => iconHoverHandler(false)}
        >
            <IconContainer>
                {React.cloneElement(icon, { ...icon.props, color: iconColor })}
            </IconContainer>
            <Label>{children}</Label>
        </Panel>
    );
};

export default SidebarPanel;
