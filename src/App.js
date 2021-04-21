import React from "react";
import "./App.css";
import Home from "./Screens/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/:currencyPair?" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
