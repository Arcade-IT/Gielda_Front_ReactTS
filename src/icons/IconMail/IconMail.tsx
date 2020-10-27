import React from 'react';
import { SVG } from '../../types/SVG';

export const IconMail: React.FC<SVG> = (props) => {
    const { size, title, color } = props;
    return (
        <svg
            version="1.1"
            x="0px"
            y="0px"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            enableBackground="new 0 0 24 24"
        >
            <g id={title}>
                <g>
                    <line
                        fill={color}
                        stroke={color}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        x1="0.5"
                        y1="15.5"
                        x2="5.5"
                        y2="15.5"
                    />

                    <line
                        fill="none"
                        stroke={color}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        x1="2.5"
                        y1="12.5"
                        x2="6"
                        y2="12.5"
                    />

                    <line
                        fill="none"
                        stroke={color}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        x1="4.5"
                        y1="9.5"
                        x2="6.5"
                        y2="9.5"
                    />
                    <polygon
                        fill="none"
                        stroke={color}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        points="22.5,17.5 
			7.5,17.5 8.5,7.5 23.5,7.5 		"
                    />
                    <polyline
                        fill="none"
                        stroke={color}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        points="8.5,7.5 
			16,13.5 23.5,7.5 		"
                    />
                </g>
            </g>
            <g id="Frames-24px">
                <rect fill="none" width="24" height="24" />
            </g>
        </svg>
    );
};
