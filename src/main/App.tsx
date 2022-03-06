import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import 'main/App.css';


import { Home } from 'pages/home/home';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  return (
    <Router>
      <div className="main_body">
        <div className="page">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
