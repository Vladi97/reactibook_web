import React from "react";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import UpdateProfile from "./UpdateProfile";
import ForgotPassword from "./ForgotPassword";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "90vh" }}
    >
      <div className="d-flex align-items-center justify-content-center row" style={{ width: "100%" }}>
        <div className="col-xs-10 col-md-10 col-xl-6">
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/home" component={Home} />
                <PrivateRoute
                  path="/update-profile"
                  component={UpdateProfile}
                />
                <Route exact path="/" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </div>
    </Container>
  );
}

export default App;
