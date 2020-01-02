import React from "react";
import { Route, Switch } from "react-router-dom";
//stying
import "./app.css";
//context
import InspyreContextProvider from "../context/InspyreContextProvider";
//routes
import About from "../components/About/About";
import CreatePrompt from "../components/CreatePrompt/CreatePrompt";
import Dashboard from "../components/Dashboard/Dashboard";
import Docs from "../components/Docs/Docs";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import NotFound404 from "../components/NotFound404/Notfound";
import Register from "../components/Register/Register";
import ViewPrompt from "../components/ViewPrompt/ViewPrompt";

//misc components
// import Misc from "../components/Misc/";

function App() {
  return (
    <InspyreContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Switch>
            
            <Route path="/about" exact render={props => <About {...props} />} />
            
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
              path="/createprompt/:id"
              exact
              render={props => <CreatePrompt {...props} />}
            />

            <Route component={NotFound404} />
          </Switch>
        </div>
      </div>
    </InspyreContextProvider>
  );
}

export default App;
