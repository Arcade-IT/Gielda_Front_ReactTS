import React from 'react';
import { View } from './NavbarView.styled';

import { containerData } from '../../../../static/Landing/containerData';

import { InfoRowData } from '../InfoRow/InfoRowData';

const NBview: React.FC = (props) => {
    return (
        <View>
            <InfoRowData data={containerData} />
        </View>
    );
};

export default NBview;
