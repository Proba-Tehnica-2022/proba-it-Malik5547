import React, {useState} from "react";
import styled from "styled-components";
import { PageLogo} from "../pageLogo";
import {Marginer} from "../marginer";

import {Button} from "../button";
import {deviceSize} from "../responsive";
import {useMediaQuery} from "react-responsive";
import DropFileInput from "../dropFileInput";

const SendMemeContainer = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  background-color: #6F3096;
  align-items: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  width: 800px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #FFFFFF;
  box-shadow: 0px 10px 30px rgba(38, 50, 56, 0.5);
  border-radius: 21px;
  
  @media screen and (max-width: ${deviceSize.mobile}px) {
    flex-direction: column-reverse;
  }
`;

const FormContainer = styled.div` 
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-right: 5em;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    align-items: center;
    margin: 0;
  }
`;

const FormSloganContainer = styled.div`
  margin: 2em 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    align-items: center;
    margin: 0;
  }
`;

const FormSlogan = styled.h2`
  margin: 0;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  text-align: start;
  line-height: 121.1%;
  color: #252F65;
`;

const FormSloganDescription = styled.h4`
  font-family:  'Roboto Thin', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 22px;
  text-align: start;
  line-height: 121.1%;
  color: #252F65;
`;

const FormInputContainer = styled.form`
  margin: 1em 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    align-items: center;
    margin: 0;
  }
`;

const FormInputLabel = styled.label`
  margin-top: 1em;
  margin-bottom: 0.5em;
  text-align: start;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #06114F;
`;

const FormInputField = styled.input`
  width: 20em;
  height: 2.5em;
  border: 1px solid #06114F;
  border-radius: 5px;
  
  ::placeholder{
    padding: 1em 0.6em;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;

    color: rgba(6, 17, 79, 0.3);
  }
`;

const FormInputBtn = styled.button`
  margin: 1em 4em;
  padding: 0.4em 0.6em;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  text-align: center;

  color: #FFFFFF;
 
  background: #6F3096;
  border-radius: 5px;
  border: none;
`

export function SendMemeSection(){
    const [decription, setDescription] = useState('')
    const [meme, setMeme] = useState('')

    const onFileChange = (file) => {
        console.log(file);
    }

    return(
        <SendMemeContainer id={"memeSection"}>
            <ContentContainer>
                <FormContainer>
                    <FormSloganContainer>
                        <FormSlogan>Ai tupeu și crezi că ești amuzant?</FormSlogan>
                        <FormSloganDescription>Trimite-ne un mail și poate ai noroc să ne apuce râsul când îți vedem meme-ul.</FormSloganDescription>
                    </FormSloganContainer>
                    <Marginer direction="horizontal" margin="1em" />
                    <FormInputContainer>
                        <FormInputLabel>Descriere</FormInputLabel>
                        <FormInputField type={"text"} placeholder={"descriere"} required value={decription} onChange={(e) => setDescription(e.target.value)}/>
                        <FormInputLabel>Meme (jpg, jpeg, png, gif)</FormInputLabel>
                        <DropFileInput onFileChange={(file) => onFileChange(file)} />
                        <FormInputBtn>Trimite</FormInputBtn>
                    </FormInputContainer>
                </FormContainer>
            </ContentContainer>
        </SendMemeContainer>
    )
}