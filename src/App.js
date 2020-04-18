import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Simulation from "./components/simulation/Simulation";
import Login from "./pages/Login";
import AuthDataProvider from "./components/AuthDataProvider";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import ComponentTest from "./ComponentTest";

function App() {
  const nodes = [
    {
      id: 1,
      position: [10, 50],
      parameters: ["Parameter 01", "Parameter 01", "Parameter 01"],
      linkTo: 2
    },

    {
      id: 2,
      position: [250, 50],
      parameters: ["Parameter 05", "Parameter 06", "Parameter 07"],
      linkTo: 3
    },
    {
      id: 3,
      position: [500, 50],
      parameters: ["Parameter 08", "Parameter 09", "Parameter 10"],
      linkTo: null
    },
    {
      id: 4,
      position: [500, 150],
      parameters: ["Parameter 08", "Parameter 09", "Parameter 10"],
      linkTo: null
    },
    {
      id: 5,
      position: [200, 150],
      parameters: ["Parameter 08", "Parameter 09", "Parameter 10"],
      linkTo: 3
    }
  ];
  return (
    // <Router>
    //   <AuthDataProvider>
    //     <div className="wrapper">
    //       <Switch>
    //         <PrivateRoute exact path="/dashboard" >
    //         <Dashboard></Dashboard>
    //         </PrivateRoute>
    //         <PrivateRoute exact path="/simulation" component={Simulation} />
    //         <Route exact path="/" component={Login} />
    //       </Switch>
    //     </div>
    //   </AuthDataProvider>
    // </Router>
    <ComponentTest nodes={nodes}/>
  );
}

export default App;
