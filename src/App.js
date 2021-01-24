import React from "react";
import Signup from "./components/Signup";
import LandingPage from "./containers/LandingPage";
import Home from "./components/Home";
import Header from "./components/Header";
import UpdateProfile from "./components/UpdateProfile";
import ForgotPassword from "./components/ForgotPassword";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  document.title = "Reactibook";
  return (
    <>
      <Header />
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/home" component={Home} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={LandingPage} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
