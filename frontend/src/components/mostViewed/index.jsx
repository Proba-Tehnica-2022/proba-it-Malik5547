import styled from "styled-components";
import {deviceSize} from "../responsive";

import FirstMeme from "../../images/meme_1.png"
import SecondMeme from "../../images/meme_2.png"
import ThirdMeme from "../../images/meme_3.png"
import BestMeme from "../../images/my_project.png"

const MostViewedContainer = styled.div`
  width: 100%;
  //height: 700px;
  display: flex;
  //background-color: #6F3096;
  align-items: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  width: 80%;
  //height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  @media screen and (max-width: ${deviceSize.mobile}px) {
    //flex-direction: column-reverse?;
  }
`;

const Title = styled.h2`
  padding-left: 0.5em;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;
  text-align: start;
  width: 100%;

  color: #252F65;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding-left: 0;
    text-align: center;
  }
`

const MemeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3em;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    flex-direction: column;
    gap: 0;
  }
`

const MemeContainer = styled.div`
  //display: block;
  width: 100%;
  padding: 1em 0;
  justify-content: flex-start;
`

const MemeImg = styled.img`
  width: 100%;
  border-radius: 55px;
`

export function MostViewedSection(){
    return(
        <MostViewedContainer>
            <ContentContainer>
                <Title>Most Viewed</Title>

                <MemeListContainer>
                    <MemeContainer>
                        <MemeImg src={BestMeme} alt={"First Meme"}/>
                    </MemeContainer>
                    <MemeContainer>
                        <MemeImg src={SecondMeme} alt={"Second Meme"}/>
                    </MemeContainer>
                    <MemeContainer>
                        <MemeImg src={ThirdMeme} alt={"Third Meme"}/>
                    </MemeContainer>
                </MemeListContainer>
            </ContentContainer>
        </MostViewedContainer>
    )
}