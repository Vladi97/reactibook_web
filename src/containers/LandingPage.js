import React from "react";
import Login from "../components/Login";

export default function LandingPage(props) {
  const content = props.content;

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
          <h3>{content.slogan}</h3>
          <br />
          <h5>{content.main_message}</h5>
        </div>
        <div className="col-12 col-md-6 p-4 col-l-6 col-xl-5 d-flex justify-content-center align-items-center flex-column">
          <Login content={content.login} />
        </div>
      </div>
    </div>
  );
}
