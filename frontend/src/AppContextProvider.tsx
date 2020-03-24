import React, { createContext, FC, useEffect, useRef, useState } from "react";
import Api from "./Api";
import { gsap } from "gsap";
import { ANIMATION } from "./variables";

interface Context {
  numberOfBars: number;
  increment: () => void;
  decrement: () => void;
}

export const AppContext = createContext<Context>({
  numberOfBars: 5,
  increment: () => {},
  decrement: () => {}
});

export const AppContextProvider: FC = ({ children }) => {
  const [numberOfBars, setNumberOfBars] = useState(0);
  const interval = useRef(0);
  const isMount = useRef(true);

  const resetInterval = () => {
    clearInterval(interval.current);
    interval.current = setInterval(async () => {
      await Api.getNumberOfBars().then(num => setNumberOfBars(prev => num));
    }, 5000);
  };

  useEffect(() => {
    resetInterval();
    Api.getNumberOfBars().then(num => setNumberOfBars(prev => num));
  }, []);

  useEffect(() => {
    if (!isMount.current) {
      gsap.fromTo(
        "#root",
        { background: "black" },
        {
          duration: 0.1,
          repeat: 1,
          ease: "power2.out",
          yoyoEase: "power2.in",
          background: "white"
        }
      );
    } else {
      isMount.current = false;
    }
  }, [numberOfBars]);

  const increment = async () => {
    resetInterval();
    const interval = setInterval(() => {
      const element = document.getElementById(`cover${numberOfBars + 1}`);
      if (element) {
        element.style.setProperty("animation", `${ANIMATION}`);
        clearInterval(interval);
      }
    }, 5);
    setNumberOfBars(await Api.increment());
  };

  const decrement = async () => {
    resetInterval();
    setNumberOfBars(await Api.decrement());
  };

  return (
    <AppContext.Provider value={{ numberOfBars, increment, decrement }}>
      {children}
    </AppContext.Provider>
  );
};
