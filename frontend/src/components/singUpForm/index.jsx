
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
    padding: 1em 1.5em;
    
  }
    
`

const FormTitle = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;

  color: #6F3096;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 24px;
    line-height: 30px;
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

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 16px;
  }
`

const InputField = styled.input`
  //font-family: 'Merriweather', sans-serif;
  width: 100%;
  height: 3em;
  margin-bottom: 1em;
  border: 1px solid #06114F;
  border-radius: 5px;
  padding-left: 1em;
  
  ::placeholder{
    //padding: 1em 0.6em;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;

    color: rgba(6, 17, 79, 0.3);
  }

  @media screen and (max-width: ${deviceSize.mobile}px) {
    height: 3em;
  }
`

const FormInputBtn = styled.button`
  font-family: 'Merriweather', sans-serif;
  margin: 2em 4em;
  width: 70%;
  height: 40px;
  padding: 0.2em 0.6em;
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
    margin-top: 1em;
    margin-bottom: 1em;
  }
`

export function SignUpForm (){
    return(
        <FormContainer>
            <FormTitle>Welcome</FormTitle>
            <InputLabel>Username</InputLabel>
            <InputField placeholder={"username"}/>
            <InputLabel>Email</InputLabel>
            <InputField placeholder={"email"}/>
            <InputLabel>Parolă</InputLabel>
            <InputField placeholder={"parolă"}/>
            <FormInputBtn>Creare Cont</FormInputBtn>
        </FormContainer>

    )
}