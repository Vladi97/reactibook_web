import React from "react";
import Login from "../components/Login";

export default function LandingPage() {
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
    <div className="h-100 ml-4 mr-4 d-flex justify-content-center align-items-left">
      <div className="d-flex justify-content-center align-items-center flex-row row">
        <div
          className="col-12 col-md-6 col-l-6 col-xl-6 d-flex justify-content-center align-items-left flex-column"
          style={{ textAlign: "center" }}
        >
          <h1 style={{ color: "#4dc497" }}>
            <b>Reactibook</b>
          </h1>
          <h3>{dataContent.landing_page.slogan}</h3>
          <br />
          <h5>{dataContent.landing_page.main_message}</h5>
        </div>
        <div className="col-12 col-md-6 p-4 col-l-6 col-xl-5 d-flex justify-content-center align-items-center flex-column">
          <Login content={dataContent.landing_page.login} />
        </div>
      </div>
    </div>
  );
}
