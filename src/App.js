import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//stying
import "./app.css";

//context
import PromptState from "./context/prompt/PromptState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";

//private route
import PrivateRoute from "./components/routing/PrivateRoute";

//routes
import About from "./components/About/About";
import CreatePrompt from "./components/CreatePrompt/CreatePrompt";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NotFound404 from "./components/NotFound404/Notfound";
import Register from "./components/Register/Register";

//misc components
// import Misc from "../components/Misc/";

function App() {
  return (
    <AuthState>
     <PromptState>
        <AlertState>
          <Router>
            <div className="container">
              
                {/* <Alerts /> */}
                <Switch>
                  <PrivateRoute exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <PrivateRoute exact path="/dash" component={Dashboard} />
                  <Route exact path="/createprompt" component={CreatePrompt} />
                  <Route component={NotFound404} />
                </Switch>
           
            </div>
          </Router>
        </AlertState>
     </PromptState>
    </AuthState>
  );
}

export default App;
