// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { PageLogo } from "../pageLogo";

// import { FaFacebookF, FaTwitter } from "@fortawesome/free-brands-svg-icons";
import { FaIcons, FaFacebook, FaTwitch, FaInstagram } from "react-icons/fa";
import { deviceSize } from "../responsive";
import { useMediaQuery } from "react-responsive";

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2em 3em;
  padding-bottom: 0;
  background: #06114F;
  
  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 2em 12px;
  }
`;

const TopContainer = styled.div`
  //width: 100%;
  display: flex;
  align-content: center;
  
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  &:not(:last-of-type) {
    margin-right: 3%;
  }
`;

const BottomContainer = styled.div`
  margin-bottom: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 0;
  }
`;

const RightBottomContainer = styled.div`
  display: flex;
`;

const LeftBottomContainer = styled.div`
  display: flex;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 13px;
  color: #000;
  font-weight: 600;
  font-size: 20px;
`;

const FLink = styled.a`
  text-decoration: none;
  color: #6f6f6f;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;

const PrivacyText = styled.h6`
  font-size: 11px;
  margin: 0.5em 0;
  font-style: normal;
  font-weight: 300;
  line-height: 121.1%;

  text-align: center;

  color: #FFFFFF;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 8px;
  }
`;

const SocialIcon = styled.a`
  color: #FFF;
  font-size: 20px;
  cursor: pointer;
  transition: background-color, 200ms ease-in-out;

  &:not(:last-of-type) {
    margin-right: 10px;
  }

  &:hover {
    color: #777777;
  }

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 17px;
  }
`;

export function Footer(props) {
    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

    return (
        <FooterContainer>
            <TopContainer>
                <ContentContainer>
                    <SocialIcon href={"https://www.instagram.com/lsacbucuresti/"}>
                        <FaInstagram/>
                    </SocialIcon>
                    <SocialIcon href={"https://www.twitch.tv/lsac_bucuresti"}>
                        <FaTwitch/>
                    </SocialIcon>
                    <SocialIcon href={"https://www.facebook.com/LsacBucuresti/"}>
                        <FaFacebook/>
                    </SocialIcon>
                </ContentContainer>
            </TopContainer>
            <BottomContainer>
                <PrivacyText>Copyright 2022 | La muncă, nu la întins mâna.</PrivacyText>
            </BottomContainer>
        </FooterContainer>
    );
}