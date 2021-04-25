import React from "react";
import {BrowserRouter as Router,Route,Redirect,Switch,} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Dashboard} />
      </Router>

    </div>
    




   
  );
}

export default App;
