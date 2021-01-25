import React from "react";
import Signup from "./components/Signup";
import LandingPage from "./containers/LandingPage";
import HomePage from "./containers/HomePage";
import ForgotPassword from "./components/ForgotPassword";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  document.title = "Reactibook";

  const content = {
    English: {
      landing_page: {
        slogan: "Let's do the timeline",
        main_message:
          "Share whatever you're thinking about, let's the world know what's in your mind",
        login: {
          form_title: "Login",
          email_input: "Email",
          password_input: "Password",
          login_button: "Login",
          forgot_password_link: "Forgot Password?",
          need_account: "Need an account?",
          sign_up: "Sign Up",
        },
      },
    },
    Spanish: {
      landing_page: {
        slogan: "Creemos una historia",
        main_message:
          "Comparte lo que estás pensando, dejemos que el mundo sepa lo que está en tu mente",
        login: {
          form_title: "Inicio de sesión",
          email_input: "Correo",
          password_input: "Contraseña",
          login_button: "Iniciar sessión",
          forgot_password_link: "Olvidaste la contraseña?",
          need_account: "Necesitas una cuenta?",
          sign_up: "Registrate",
        },
      },
    },
  };

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
