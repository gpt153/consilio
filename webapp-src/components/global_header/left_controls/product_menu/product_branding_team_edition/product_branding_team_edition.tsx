// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import styled from 'styled-components';

import ConsilioLogo from '../../../../common/svg_images_components/consilio_logo';

const Container = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 16px;
`;

const LogoWrapper = styled.div`
    display: flex;
    width: 120px;
    height: 20px;
`;

export default function ProductBrandingTeamEdition() {
    return (
        <Container>
            <LogoWrapper>
                <ConsilioLogo width={120} height={20} />
            </LogoWrapper>
        </Container>
    );
}
