import React from "react";
import styled from "styled-components";

import {deviceSize} from "../responsive";
import {PageLogo} from "../pageLogo";

import CloseBtnImg from "../../images/closeBtn.png"

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  z-index: 10;
`

const ModalContainer = styled.div`
  max-width: 500px;
  width: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border-radius: 5px;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 100%;
    border-radius: 0;
    
    //height: 100%;
  }
`

const ModalTop = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2em 1.5em;
  
  & img{
    max-height: 35px;
  }

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 2em 1.5em;

    & img{
      max-height: 30px;
    }
  }
`

const ModalContent = styled.div`
  padding: 3em 3em;
  background: #6F3096;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    border-radius: 0;
  }
`

const CloseBtn = styled.img`
  width: 1.5em;
  height: 1.5em;
  text-align: center;
  line-height: 1em;
  display: block;

  border-radius: 50%;
  
  &:hover{
    cursor: pointer;
  }
`

export const Modal = ({ open, onClose, form}) => {

    if(!open) return null;
    return (
        <Overlay>
            <ModalContainer>
                <ModalTop>
                    <PageLogo />
                    <CloseBtn src={CloseBtnImg} onClick={onClose}/>
                </ModalTop>
                <ModalContent>
                    {form()}
                </ModalContent>
            </ModalContainer>
        </Overlay>
    )
}