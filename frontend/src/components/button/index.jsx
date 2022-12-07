import React from "react";
import styled from "styled-components";
import { deviceSize } from "../../components/responsive";


const ButtonWrapper = styled.button`
  
  border: none;
  outline: none;
  color: #FFF;
  //margin: 0 1em;
  padding: 10px 2em;
  background: #6F3096;
  border-radius: 5px;
  font-family: 'Merriweather', serif;
  // font-size: ${({ size }) => (size ? size + "px" : "18px")};
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  cursor: pointer;
  transition: all 200ms ease-in-out;


  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 18px;
    
    ${({size}) => (size ? "width: " + size + ";" : null)};
    ${({size}) => (size ? "height: " + size + ";" : null)};
  }
  
  &:hover {
  }

  &:focus {
    outline: none;
  }
`;

export function Button(props) {
    const { size } = props;

    return (
        <ButtonWrapper size={size} className={props.className}>
            {props.children}
        </ButtonWrapper>
    );
}