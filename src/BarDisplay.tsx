import React, { FC, useCallback, useContext, useEffect, useState } from "react";
import { Bar } from "./Bar";
import { AppContext } from "./AppContextProvider";
import { BarBlock } from "./BarBlock";
import styled from "styled-components";
import { BLOCK_WIDTH } from "./variables";

function chunkArray(array: Array<any>, chunkSize: number) {
  let results = [];

  for (let i = 0; i < array.length; i += chunkSize) {
    results.push(array.slice(i, i + chunkSize));
  }

  return results;
}
const BarContainer = styled.div`
  padding: 100px 100px 200px 100px;
  display: grid;
  justify-content: center;
  gap: 100px;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${BLOCK_WIDTH}px, ${BLOCK_WIDTH}px)
  );
  pointer-events: none;
`;

interface BarDisplayProps {}

export const BarDisplay: FC<BarDisplayProps> = () => {
  const { numberOfBars, decrement } = useContext(AppContext);
  const [bars, setBars] = useState<Array<JSX.Element>>([]);

  useEffect(() => {
    if (bars.length > 0) {
      const interval1 = setInterval(() => {
        const bar = document.getElementById(`bar${bars.length}`);
        if (bar) {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
          });
          bar.onclick = decrement;
          bar.style.cursor = "pointer";
          bar.style.pointerEvents = "all";
          clearInterval(interval1);
        }
      }, 5);
    }
    if (bars.length > 1) {
      const interval2 = setInterval(() => {
        const prevBar = document.getElementById(`bar${bars.length - 1}`);
        if (prevBar) {
          prevBar.onclick = () => {};
          prevBar.style.cursor = "auto";
          prevBar.style.pointerEvents = "none";
          clearInterval(interval2);
        }
      }, 5);
    }
  }, [bars, decrement]);
  useEffect(() => {
    setBars((prevState: Array<JSX.Element>) => {
      let newBars = [...prevState];

      for (let i = prevState.length + 1; i <= numberOfBars; i++) {
        newBars = [...newBars, <Bar barNumber={i} key={i} />];
      }
      for (let i = prevState.length; i > numberOfBars; i--) {
        newBars = newBars.slice(0, -1);
      }
      return newBars;
    });
  }, [numberOfBars]);

  return (
    <BarContainer>
      {chunkArray(bars, 5).map((array, index) => {
        return <BarBlock bars={array} key={index} />;
      })}
    </BarContainer>
  );
};
