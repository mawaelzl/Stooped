import React, { FC, useContext, useEffect, useState } from "react";
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

const removeClick = (id: number) => {
  const interval = setInterval(() => {
    const bar = document.getElementById(`bar${id}`);
    if (bar) {
      bar.onclick = () => {};
      bar.style.cursor = "auto";
      bar.style.pointerEvents = "none";
      clearInterval(interval);
    }
  }, 5);
};

const addClick = (id: number, onClick: () => void) => {
  const interval = setInterval(() => {
    const bar = document.getElementById(`bar${id}`);
    if (bar) {
      bar.onclick = onClick;
      bar.style.cursor = "pointer";
      bar.style.pointerEvents = "all";
      clearInterval(interval);
    }
  }, 5);
};

export const BarDisplay: FC<BarDisplayProps> = () => {
  const { numberOfBars, decrement } = useContext(AppContext);
  const [bars, setBars] = useState<Array<JSX.Element>>([]);

  useEffect(() => {
    setBars((prevState: Array<JSX.Element>) => {
      let newBars = [...prevState];

      for (let i = prevState.length + 1; i <= numberOfBars; i++) {
        removeClick(newBars.length);
        newBars = [...newBars, <Bar barNumber={i} key={i} />];
      }
      for (let i = prevState.length; i > numberOfBars; i--) {
        newBars = newBars.slice(0, -1);
      }

      if (newBars.length > 0) {
        addClick(newBars.length, decrement);
      }

      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
      });

      return newBars;
    });
  }, [decrement, numberOfBars]);

  return (
    <BarContainer>
      {chunkArray(bars, 5).map((array, index) => {
        return <BarBlock bars={array} key={index} />;
      })}
    </BarContainer>
  );
};
