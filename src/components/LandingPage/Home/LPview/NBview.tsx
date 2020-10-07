import React from 'react';
import { View } from './NBview.styled';

import { containerData } from '../../../../static/Landing/containerData';

import { InfoRowData } from '../LPInfoRow/InfoRowData';

const NBview: React.FC = (props) => {
    return (
        <View>
            <InfoRowData data={containerData} />
        </View>
    );
};

export default NBview;
