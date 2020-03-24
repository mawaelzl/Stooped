import React, { FC, useContext } from "react";
import { AppContext } from "./AppContextProvider";
import styled from "styled-components";

const ButtonContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 10vh;
  bottom: 0;
  text-align: center;
  z-index: 10;
`;

const Button = styled.button`
  width: 150px;
  height: 50px;
  border: 3px solid white;
  background: black;
  color: white;
  transition: 0.4s;
  font-family: inherit;
  font-weight: 900;
  pointer-events: all;
  cursor: pointer;

  &:hover {
    background: white;
    color: black;
  }
`;

export const AddButton: FC = () => {
  const { increment } = useContext(AppContext);

  return (
    <ButtonContainer>
      <Button onClick={increment}>STOOPED</Button>
    </ButtonContainer>
  );
};
