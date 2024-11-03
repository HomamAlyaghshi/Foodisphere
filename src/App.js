import { React, useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import GetStarted from "./Auth/GetStarted";
import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";
import ForgetPassword from "./Auth/ForgetPassword";
import MenuPage from "./Pages/MenuPage";
import BookTable from "./Pages/BookTable";
import BlogPage from "./Pages/BlogPage";
import ContactUsPage from "./Pages/ContactUsPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={GetStarted} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/password" component={ForgetPassword} />
        <Route path="/homepage" component={HomePage} />
        <Route path="/aboutpage" component={AboutPage} />
        <Route path="/menupage" component={MenuPage} />
        <Route path="/booktable" component={BookTable} />
        <Route path="/blogpage" component={BlogPage} />
        <Route path="/contactpage" component={ContactUsPage} />
      </Switch>
    </Router>
  );
}

export default App;
