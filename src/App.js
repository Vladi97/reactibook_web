import React from "react";
import Signup from "./components/Signup";
import LandingPage from "./containers/LandingPage";
import HomePage from "./containers/HomePage";
import ForgotPassword from "./components/ForgotPassword";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
const contentJson = require("./content.json")

function App() {
  document.title = "Reactibook";

  const content = contentJson;

  let dataContent = {};
  navigator.language.toLowerCase().includes("es")
    ? (dataContent = content.Spanish)
    : (dataContent = content.English);

  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/home" component={HomePage} />
            <Route exact path="/" render={(props) => <LandingPage content={dataContent.landing_page} />} />
            <Route exact path="/signup" render={(props) => <Signup content={dataContent.signup_password_component} />} />
            <Route exact path="/login" render={(props) => <LandingPage content={dataContent.landing_page} />} />
            <Route path="/forgot-password" render={(props) => <ForgotPassword content={dataContent.forgot_password_component} />} />
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
