import React, {useState} from "react";
import styled from "styled-components";
import { PageLogo } from "../pageLogo";
import { Button } from "../button";
import { Marginer } from "../marginer";
import {Modal} from "../modal";
import {SignInForm} from "../signInForm";
import {SignUpForm} from "../singUpForm";
import {CgMenuGridR} from "react-icons/cg";

import { Link } from "react-router-dom";
import { deviceSize } from "../responsive";
import { useMediaQuery } from "react-responsive";

const NavbarContainer = styled.div`
  position: sticky;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.5em 3.5em 2em 2em ;

  background-color: #FFF;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 2.5em 1.5em 2em 2em ;
  }
`;

const AccessibilityContainer = styled.div`
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    flex-direction: column;
    align-content: center;
    position: fixed;
    left: 50vw;
    width: 50vw;
    top: 65px;
    height: auto;
    background-color: #FFF;
  }
`;

const BurgerMenu = styled.div`
  font-size: 40px;
  
`

const MenuList = styled.ul`
  
`

const MenuItem = styled.li`
  
`

const SignBtn = styled.button`
  border: none;
  outline: none;
  color: #06114F;
  background-color: #fff;
  margin: 0 0.6em;
  padding: 6px 1em;
  font-family: 'Merriweather', serif;
  font-size: ${({ size }) => (size ? size + "px" : "18px")};
  font-weight: 600;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 1em 0.6em;;
  }

  &:hover {
  }

  &:focus {
    outline: none;
  }
`;

const AnchorLink = styled(Link)`
  font-size: 12px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  transition: all 200ms ease-in-out;

  &:hover {
    filter: contrast(0.6);
  }
`;

export function Navbar(props) {
    const { useTransparent } = props;

    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

    const [openSignInModal, setOpenSignInModal] = useState(false);
    const [openSignUpModal, setOpenSignUpModal] = useState(false);

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () =>{
        setOpenMenu(!openMenu);
    }

    if(isMobile)
        return(
            <NavbarContainer useTransparent={useTransparent}>
                <PageLogo logoSize={"35"} />
                <BurgerMenu>
                    <CgMenuGridR onClick={() => toggleMenu()} width={"100px"}/>
                </BurgerMenu>

                { openMenu &&
                    <AccessibilityContainer>
                        <SignBtn onClick={() => setOpenSignInModal(true)} size={15}>Logare</SignBtn>
                        <Modal open={openSignInModal} onClose={() => setOpenSignInModal(false)} form={SignInForm}/>
                        <SignBtn onClick={() => setOpenSignUpModal(true)} size={15}>Creare cont</SignBtn>
                        <Modal open={openSignUpModal} onClose={() => setOpenSignUpModal(false)} form={SignUpForm}/>
                    </AccessibilityContainer>
                }
            </NavbarContainer>
        );
    else
        return(
            <NavbarContainer useTransparent={useTransparent}>
                <PageLogo />
                <AccessibilityContainer>
                    <SignBtn onClick={() => setOpenSignInModal(true)} size={15}>Logare</SignBtn>
                    <Modal open={openSignInModal} onClose={() => setOpenSignInModal(false)} form={SignInForm}/>
                    <SignBtn onClick={() => setOpenSignUpModal(true)} size={15}>Creare cont</SignBtn>
                    <Modal open={openSignUpModal} onClose={() => setOpenSignUpModal(false)} form={SignUpForm}/>
                </AccessibilityContainer>
            </NavbarContainer>
        );
}