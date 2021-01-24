import React from "react";
import Login from "../components/Login";

export default function LandingPage() {
  return (
    <div className="container h-100">
      <div className="h-100 d-flex justify-content-center align-items-center flex-row mt-5 row">
        <div className="col-12 col-md-6 col-l-6 col-xl-6 h-100 d-flex justify-content-center align-items-center flex-column" style={{ textAlign: "center"}}>
          <h1 style={{ color: "#4dc497" }}>
            <b>Reactibook</b>
          </h1>
          <h3>Let's do the timeline</h3>
<br/>
          <h5>Share whatever you're thinking about, let's the world know what's in your mind</h5>
        </div>
        <div className="col-12 col-md-6 p-4 col-l-6 col-xl-6 h-100 d-flex justify-content-center align-items-center flex-column">
          <Login />
        </div>
      </div>
    </div>
  );
}
