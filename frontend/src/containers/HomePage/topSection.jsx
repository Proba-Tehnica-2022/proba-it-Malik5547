import React, {useState} from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { PageLogo } from "../../components/pageLogo";
import { Button } from "../../components/button";
import { Marginer } from "../../components/marginer";
import { deviceSize } from "../../components/responsive";
import {Modal} from "../../components/modal";

// import TopSectionBackgroundImg from "../../images/landing-page.jpg";
// import TopSectionBackgroundImg from "../../images/landing-page.jpg";
import WhySoSaltyImg from "../../images/why_so_salty.png";
import {SendMemeSection} from "../../components/sendMeme";

const TopSectionContainer = styled.div`
  width: 100%;
  height: 800px;
  //background: url() no-repeat;
  //background-position: 0px -150px;
  background-size: cover;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    height: 700px;
    background-position: 0px 0px;
  }
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    height: auto;
  }
`;

const TopSectionInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 3em;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: auto;
    padding: 0 2.7em;
    flex-direction: column;
  }
`;

const StandoutImage = styled.div`
  width: 44em;
  height: 44em;

  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    align-items: center;
    width: 100%;
  }
`;

const SloganText = styled.h3`
  width: 36rem;
  margin-bottom: 0;
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 121.1%;
  /* or 52px */

  text-align: center;

  color: #252F65;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-family: 'Merriweather';
    width: 100%;
    font-style: normal;
    font-weight: 900;
    font-size: 28px;
    line-height: 121.1%;

    text-align: center;

    color: #252F65;
  }
`;

const SloganDescription = styled.h4`
  width: 36rem;
  padding: 0 3rem;
  margin-bottom: 1rem;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  /* or 52px */

  color: #252F65;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 100%;
    padding: 0;
    font-weight: 300;
    line-height: 21px;
    font-size: 18px;
  }
`;

export function TopSection(props) {
    const { children } = props;

    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

    return (
        <TopSectionContainer>
            <BackgroundFilter>
                <TopSectionInnerContainer>
                    <LogoContainer>
                        {/*<PageLogo*/}
                        {/*    logoSize={isMobile ? 40 : 65}*/}
                        {/*    textSize={isMobile ? 35 : 55}*/}
                        {/*/>*/}
                        <Marginer direction="vertical" margin={8} />
                        <SloganText>Partajarea de meme-uri nu a fost niciodată mai simplă!</SloganText>
                        <SloganDescription>Platforma ideală pentru studenții de la Politehnică, amuzați de câte materii o să pice semestrul asta.</SloganDescription>
                        <Marginer direction="vertical" margin={15} />
                        <a href={"#memeSection"}>
                            <Button size={20}>Upload a MEME</Button>
                        </a>
                    </LogoContainer>
                    {!isMobile && (
                        <StandoutImage>
                            <img src={WhySoSaltyImg} alt="best in the field" />
                        </StandoutImage>
                    )}
                </TopSectionInnerContainer>
            </BackgroundFilter>
        </TopSectionContainer>
    );
}