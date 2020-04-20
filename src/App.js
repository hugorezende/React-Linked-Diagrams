import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Simulation from "./components/simulation/Simulation";
import Login from "./pages/Login";
import AuthDataProvider from "./components/AuthDataProvider";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import ComponentTest from "./ComponentTest";
import Canvas from "./components/diagrams/Canvas";
import styled from "styled-components";

function App() {
  const nodes = [
    {
      id: 1,
      position: [10, 50],
      title: "Agent 01",
      parameters: ["Parameter 01", "Parameter 01", "Parameter 01"],
      linkTo: [2, 3]
    },

    {
      id: 2,
      position: [250, 100],
      title: "Agent 02",
      parameters: ["Parameter 05", "Parameter 06", "Parameter 07"],
      linkTo: []
    },
    {
      id: 3,
      position: [500, 50],
      title: "Agent 03",
      parameters: ["Parameter 08", "Parameter 09", "Parameter 10"],
      linkTo: [5]
    },
    {
      id: 4,
      position: [50, 350],
      title: "Agent 04",
      parameters: ["Parameter 08", "Parameter 09", "Parameter 10"],
      linkTo: []
    },
    {
      id: 5,
      position: [250, 350],
      title: "Agent 05",
      parameters: ["Parameter 08", "Parameter 09", "Parameter 10"],
      linkTo: []
    }
  ];
  return (
    <SimulationDiv>
      <Canvas nodes={nodes} />
    </SimulationDiv>
  );
}

const SimulationDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #222;
`;


export default App;
