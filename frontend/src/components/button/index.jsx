import React from "react";
import styled from "styled-components";

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