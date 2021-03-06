import React from 'react';

import Icon from '../../components/icon';
import { coolGreyTwo } from '../../assets/theme';

const UndoIcon = ({ disabled, ...props }) => (
    <Icon {...props} viewBox="0 0 16 10">
        <path
            fill={disabled ? 'rgba(157, 163, 170, 0.5)' : coolGreyTwo}
            d="M11,4H3.9l2.8-2.2c0.4-0.3,0.5-1,0.2-1.4c-0.3-0.4-1-0.5-1.4-0.2l-5,4c0,0,0,0,0,0c0,0-0.1,0.1-0.1,0.1c0,0,0,0,0,0
	c0,0,0,0.1,0,0.1c0,0-0.1,0.1-0.1,0.1c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1C0,5,0,5,0,5s0,0,0,0.1c0,0,0,0.1,0,0.1
	c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0.1,0.1,0.1c0,0,0,0.1,0,0.1c0,0,0,0,0,0c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0l5,4
	C5.6,9.9,5.8,10,6,10c0.3,0,0.6-0.1,0.8-0.4c0.3-0.4,0.3-1.1-0.2-1.4L3.9,6H11c1.7,0,3,1.3,3,3c0,0.6,0.4,1,1,1s1-0.4,1-1
	C16,6.2,13.8,4,11,4z"
        />
    </Icon>
);

export default UndoIcon;
