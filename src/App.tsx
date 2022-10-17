import React from "react";
import "./App.css";
import Container from "./components/Container";

const App: React.FunctionComponent = () => {
  return (
    <div id="main-container">
      <h1>Simple React Weather App</h1>
      <Container />
    </div>
  );
};

export default App;
