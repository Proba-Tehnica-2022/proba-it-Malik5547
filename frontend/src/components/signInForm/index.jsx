
import React from "react";
import styled from "styled-components";
import { Button} from "../button";


const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3em 3em;
  border-radius: 5%;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    
`

const FormTitle = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;

  color: #6F3096;
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
  height: 2.5em;
  margin-bottom: 1.5em;
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