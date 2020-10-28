import React from "react";

import "./App.css";
import Options from "./components/Options";
import Graphs from "./components/Graphs";
import { BrowserRouter as Router , Switch ,Route} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="App">
      <div className="root-div">
        <div className="options-div">
          <Options />
        </div>
        <div className="search-div">
          <Switch>
            <Route  path="/:searchoption" component={Graphs} />
          </Switch>
        
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
