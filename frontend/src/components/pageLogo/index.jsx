import React from "react";
import styled from "styled-components";

import LogoImg from "../../images/logos/logo.png";
import { Link } from "react-router-dom";

const PageLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.div`
  // ${({ size }) => (size ? "width: " + size + "px" : null)};
  ${({ size }) => (size ? "height: " + size + "px" : null)};

  img {
    width: 100%;
    height: 100%;
  }
`;

export function PageLogo({logoSize, hideLogo}) {

    return (
        <PageLogoContainer>
            {!hideLogo && (
                <Link to="/">
                    <LogoImage size={logoSize}>
                        <img src={LogoImg} alt="Logo" />
                    </LogoImage>
                </Link>
            )}
        </PageLogoContainer>
    );
}