import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import SwipeButtons from "./components/SwipeButtons";
import TinderCards from "./components/TinderCards";

function App() {
  return (
    <div className="app">
      <Header />

      <Router>
        <Switch>
          <Route path="/">
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
