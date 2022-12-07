import React from "react";
import styled from "styled-components";
import { Footer } from "../../components/footer";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar";
import {
    InnerPageContainer,
    PageContainer,
} from "../../components/pageContainer";
import { deviceSize } from "../../components/responsive";
// import { SpecialistAd } from "../../components/specialistAd";
// import { Services } from "./services";
import { TopSection } from "./topSection";
import {SendMemeSection} from "../../components/sendMeme";
import {MostViewedSection} from "../../components/mostViewed";


const ContentContainer = styled.div`
  width: 100%;
  //max-width: ${deviceSize.laptop}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1em 0;

  @media screen and (max-width: ${deviceSize.tablet}px) {
    //width: 90%;
  }
`;

export function HomePage() {
    return (
        <PageContainer>
            <Navbar useTransparent />
            <TopSection/>
            <InnerPageContainer>
                <Marginer direction="vertical" margin="2em" />
                <ContentContainer>
                    <SendMemeSection />
                </ContentContainer>
                <Marginer direction="horizontal" margin="5em" />
                <ContentContainer>
                    <MostViewedSection />
                </ContentContainer>
                <Marginer direction="vertical" margin="1em" />
            </InnerPageContainer>
            <Footer />
        </PageContainer>
    )
}