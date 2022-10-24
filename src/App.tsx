import React from "react";
import "./App.css";
import Container from "./components/Container/Container";

const App: React.FC = () => {
  return (
    <div id="main-container">
      <h1>Simple React Weather App</h1>
      <Container />
    </div>
  );
};

export default App;
