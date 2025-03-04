// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import styled from 'styled-components';

import ConsilioLogo from 'components/common/svg_images_components/consilio_logo';

const ProductBrandingTeamEditionContainer = styled.span`
    display: flex;
    align-items: center;

    > * + * {
        margin-left: 8px;
    }
`;

const StyledLogo = styled(ConsilioLogo)`
    path {
        fill: rgba(var(--sidebar-text-rgb), 0.75);
    }
`;

const ProductBrandingTeamEdition = (): JSX.Element => {
    return (
        <ProductBrandingTeamEditionContainer tabIndex={-1}>
            <StyledLogo
                width={116}
                height={20}
            />
        </ProductBrandingTeamEditionContainer>
    );
};

export default ProductBrandingTeamEdition;
