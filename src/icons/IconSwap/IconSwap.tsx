import React from 'react';
import { SVG } from '../../types/SVG';

export const IconSwap: React.FC<SVG> = (props) => {
    const { size, title, color, style } = props;
    return (
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 20 20"
            style={{ ...style, fill: color, transition: 'fill 0.6s ease' }}
        >
            <title>{title}</title>
            <path d="M14 5h-10v-2l-4 3.5 4 3.5v-2h10v-3zM20 13.5l-4-3.5v2h-10v3h10v2l4-3.5z" />
        </svg>
    );
};
