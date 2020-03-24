import React, { FC } from "react";
import styled from "styled-components";
import { BAR_HEIGHT, BAR_WIDTH, BLOCK_WIDTH, GRID_GAP } from "./variables";

const VerticalBars = styled.div`
  position: absolute;
  display: grid;
  column-gap: ${GRID_GAP}px;
  grid-template-columns: repeat(4, ${BAR_WIDTH}px);
  z-index: 2;
`;

const HorizontalBars = styled.div`
  height: ${BAR_WIDTH * 4 + GRID_GAP * 3}px;
  width: ${BAR_HEIGHT}px;
  position: absolute;
  display: flex;
  align-items: center;
  text-align: center;
  transform: rotate(90deg) translateY(${(BAR_HEIGHT - BLOCK_WIDTH) / 2}px)
    translateX(${(BAR_HEIGHT - BLOCK_WIDTH) / 2}px);
  z-index: 1;
`;

const BarDiv = styled.div`
  width: ${BAR_WIDTH}px;
  height: ${6 * BAR_WIDTH + 3 * GRID_GAP}px;
  margin-left: auto;
  margin-right: auto;
`;

const BlockContainer = styled.div`
  position: relative;
  width: ${BLOCK_WIDTH}px;
  height: ${BAR_HEIGHT}px;
`;

export const BarBlock: FC<{ bars: Array<JSX.Element> }> = ({ bars }) => {
  if (bars.length > 5) {
    throw new Error();
  }

  return (
    <BlockContainer>
      <VerticalBars>
        {bars.filter((bar, index) => (index + 1) % 5)}
      </VerticalBars>
      <HorizontalBars>
        <BarDiv>{bars.filter((bar, index) => !((index + 1) % 5))}</BarDiv>
      </HorizontalBars>
    </BlockContainer>
  );
};
