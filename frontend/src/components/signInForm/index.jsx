
import React from "react";
import styled from "styled-components";

import {deviceSize} from "../responsive";
import { Button} from "../button";


const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3em 3em;
  border-radius: 5%;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 2em 1.5em;
    
  }
`

const FormTitle = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;

  color: #6F3096;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    margin-bottom: 1.5em;
    font-size: 24px;
  }
`

const InputLabel = styled.h4`
  margin-top: 0;
  margin-bottom: 0.5em;
  align-self: start;
  text-align: start;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  
  color: #252F65;
`

const InputField = styled.input`
  width: 100%;
  height: 3em;
  margin-bottom: 1.5em;
  border: 1px solid #06114F;
  border-radius: 5px;
  padding-left: 1em;
  font-weight: 700;
  

  ::placeholder{
    //padding: 1m 0.6em;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;

    color: rgba(6, 17, 79, 0.3);
  }

  @media screen and (max-width: ${deviceSize.mobile}px) {
    height: 3.4em;
  }
`

const FormInputBtn = styled.button`
  margin: 2em 4em;
  width: 70%;
  height: 35px;
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

  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 75%;
    height: 3em;
    margin-top: 1em;
    margin-bottom: 1em;

    font-family: 'Merriweather', sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
  }
`

export function SignInForm (){
    return(
        <FormContainer>
            <FormTitle>Welcome back</FormTitle>
            <InputLabel>Username</InputLabel>
            <InputField placeholder={"username"}/>
            <InputLabel>Parolă</InputLabel>
            <InputField placeholder={"parolă"}/>
            <FormInputBtn>Logare</FormInputBtn>
        </FormContainer>

    )
}