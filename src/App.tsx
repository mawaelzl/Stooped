import React from "react";
import "./App.css";
import { BarDisplay } from "./BarDisplay";
import { AppContextProvider } from "./AppContextProvider";
import { AddButton } from "./AddButton";

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <BarDisplay />
        <AddButton />
      </AppContextProvider>
    </div>
  );
}

export default App;
