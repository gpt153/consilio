// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import styled from 'styled-components';

type Props = {
    width?: number;
    height?: number;
    className?: string;
}

const Svg = styled.svg.attrs({
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg',
    xmlnsXlink: 'http://www.w3.org/1999/xlink',
})``;

export default (props: Props) => (
    <Svg
        className={props.className}
        width={props.width ? props.width.toString() : '182'}
        height={props.height ? props.height.toString() : '30'}
        viewBox='0 0 182 30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        {/* Consilio text */}
        <path
            d="M15.6,7.2c-3.8,0-6.8,3-6.8,6.8s3,6.8,6.8,6.8c3.8,0,6.8-3,6.8-6.8S19.4,7.2,15.6,7.2z M15.6,18.8
            c-2.6,0-4.8-2.2-4.8-4.8s2.2-4.8,4.8-4.8s4.8,2.2,4.8,4.8S18.2,18.8,15.6,18.8z"
            fill="#1E325C"
        />
        <path
            d="M32.4,7.4c-3.8,0-6.8,3-6.8,6.8s3,6.8,6.8,6.8c1.9,0,3.6-0.8,4.8-2l-1.4-1.4c-0.9,0.9-2.1,1.4-3.4,1.4
            c-2.6,0-4.8-2.2-4.8-4.8s2.2-4.8,4.8-4.8c1.3,0,2.5,0.5,3.4,1.4l1.4-1.4C36,8.2,34.3,7.4,32.4,7.4z"
            fill="#1E325C"
        />
        <path
            d="M48.6,7.4h-5v12h2v-4h3c2.2,0,4-1.8,4-4S50.8,7.4,48.6,7.4z M48.6,13.4h-3v-4h3c1.1,0,2,0.9,2,2
            S49.7,13.4,48.6,13.4z"
            fill="#1E325C"
        />
        <path
            d="M63.6,7.4h-5v12h5v-2h-3v-3h3v-2h-3v-3h3V7.4z"
            fill="#1E325C"
        />
        <path
            d="M70.6,7.4h-2v12h2V7.4z"
            fill="#1E325C"
        />
        <path
            d="M80.6,7.4h-2v12h2V7.4z"
            fill="#1E325C"
        />
        <path
            d="M90.6,7.4h-5v12h5v-2h-3v-3h3v-2h-3v-3h3V7.4z"
            fill="#1E325C"
        />
        
        {/* Stylized C icon */}
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M4.1373 12.2575C4.1373 12.2575 4.1838 14.3044 2.7644 15.695C1.3448 17.0856 -0.3988 16.9585 -1.533 16.5745C-2.6674 16.1905 -4.1296 15.2323 -4.4127 13.2655C-4.6955 11.2986 -3.4152 9.70069 -3.4152 9.70069L-0.6253 6.23118L0.9996 4.24963L2.3944 2.52282C2.3944 2.52282 3.0345 1.66544 3.2169 1.48849C3.2531 1.45342 3.2901 1.43042 3.3265 1.4127L3.3529 1.39919L3.3577 1.39736C3.4344 1.36431 3.5228 1.35719 3.6081 1.38604C3.6915 1.41435 3.7562 1.47169 3.7971 1.54236L3.8056 1.55605L3.8131 1.57176C3.833 1.60938 3.8496 1.65229 3.8575 1.70525C3.8948 1.95671 3.8825 3.02665 3.8825 3.02665L3.9415 5.24543L4.0286 7.8066L4.1373 12.2575Z'
            fill='#1E325C'
        />
    </Svg>
); 