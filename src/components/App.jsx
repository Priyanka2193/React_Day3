import React from "react";

import Home from "./Home";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Cat from "./Cat";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cats/:id" component={Cat} />
      </Router>
    </div>
  );
}

export default App;
