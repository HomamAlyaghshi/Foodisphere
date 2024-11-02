import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import GetStarted from "./Auth/GetStarted";
import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";
import ForgetPassword from "./Auth/ForgetPassword";

function App() {
  return (
    <Router>
      <div className="w-full h-full">
        <Switch>
          <Route path="/" exact component={GetStarted} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/password" component={ForgetPassword} />
          <Route path="/homepage" component={HomePage} />
          <Route path="/aboutpage" component={AboutPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
