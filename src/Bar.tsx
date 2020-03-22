import React, { FC } from "react";
import styled from "styled-components";
import { ANIMATION, FADE_HEIGHT } from "./variables";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const BarContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  &:hover {
    .bar-image {
      z-index: 9;
      filter: drop-shadow(1px 1px 0 black) drop-shadow(1px -1px 0 black)
        drop-shadow(1px 0px 0 black) drop-shadow(-1px 1px 0 black)
        drop-shadow(-1px -1px 0 black) drop-shadow(-1px 0px 0 black)
        drop-shadow(0px 1px 0 black) drop-shadow(0px -1px 0 black)
        drop-shadow(0px 0px 0 black) invert();
    }
  }
`;

const Cover = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateY(100%);
  animation: ${ANIMATION};

  @keyframes move {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(100%);
    }
  }
`;

const OverlapDiv = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
`;

const BarImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Fade = styled.div`
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1) 100%
  );
  top: 1px;
  height: ${FADE_HEIGHT}px;
  position: relative;
`;

const Block = styled.div`
  height: 100%;
  width: 100%;
  background: black;
`;

interface BarProps {
  barNumber: number;
}

export const Bar: FC<BarProps> = ({ barNumber }) => {
  return (
    <Container>
      <BarContainer
        style={{
          transform: `rotate(${(Math.random() - 0.5) * 20 +
            (Math.random() > 0.5 ? 180 : 0)}deg)`
        }}
        id={`bar${barNumber}`}
      >
        <OverlapDiv
          style={{ transform: `rotate(${Math.random() > 0.5 ? 0 : 180}deg)` }}
        >
          <Cover id={`cover${barNumber}`}>
            <Fade />
            <Block />
          </Cover>
        </OverlapDiv>
        <BarImage
          src={
            process.env.PUBLIC_URL + `/${Math.floor(Math.random() * 5 + 1)}.png`
          }
          alt="bar"
          className="bar-image"
        />
      </BarContainer>
    </Container>
  );
};
