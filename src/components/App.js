import React from "react";
import { Route, Switch } from "react-router-dom";
//stying
import "./app.css";
//context
import InspyreContextProvider from "../context/InspyreContextProvider";
//routes
import {useState, useEffect} from 'react'; 
import axios from  'axios'; 
import About from "../components/About/About";
import CreatePrompt from "../components/CreatePrompt/CreatePrompt";
import Dashboard from "../components/Dashboard/Dashboard";
import Docs from "../components/Docs/Docs";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import NotFound404 from "../components/NotFound404/Notfound";
import Register from "../components/Register/Register";
import ViewPrompt from "../components/ViewPrompt/ViewPrompt";
import {useFetch} from '../components/Misc/Hooks'; 

//misc components
// import Misc from "../components/Misc/";

function App() {
  const [data, loading] = useFetch("http://localhost:5000/all");

  return (
    <InspyreContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Switch>
            
            <Route path="/about" exact render={props => <About {...props} />} />

            <Route path="/dash" exact render={props => <Dashboard {...props} />} />

            <Route exact path="/docs" render={props => <Docs {...props} />} />

            <Route
              path="/"
              exact
              render={props => <Home {...props} />}
            />

            <Route
              path="/login"
              exact
              render={props => <Login {...props} />}
            />
            <Route
              path="/register"
              exact
              render={props => <Register {...props} />}
            />
          
            <Route
              path="/viewprompt/:id"
              exact
              render={props => <ViewPrompt {...props} />}
            />

            <Route
              path="/createprompt"
              exact
              render={props => <CreatePrompt {...props} promptData={data}/>}
            />

            <Route component={NotFound404} />
          </Switch>
        </div>
      </div>
    </InspyreContextProvider>
  );
}

export default App;
