import React from 'react';
import { SVG } from '../../types/SVG';

export const IconDollar: React.FC<SVG> = (props) => {
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
            <path d="M10 20c-5.523 0-10-4.477-10-10s4.477-10 10-10v0c5.523 0 10 4.477 10 10s-4.477 10-10 10v0zM11 15h1c1.657 0 3-1.343 3-3s-1.343-3-3-3v0h-4.010c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h6.010v-2h-3v-2h-2v2h-1c-1.657 0-3 1.343-3 3s1.343 3 3 3v0h4c0.552 0 1 0.448 1 1s-0.448 1-1 1v0h-6v2h3v2h2v-2z" />
        </svg>
    );
};
