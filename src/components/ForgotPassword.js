import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

export default function ForgotPassword(props) {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const content = props.content;

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <div className="h-100 d-flex justify-content-center align-items-center">
      <Card style={{ border: 0 }} className="col-11 col-sm-8 col-md-6 col-l-5 col-xl-4">
        <Card.Body>
          <h2 className="text-center mb-4" style={{ color: "#4dc497" }} >{content.title}</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>{content.input_label}</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Button style={{ backgroundColor: "#4dc497", borderColor: "#4dc497" }} disabled={loading} className="w-100" type="submit">
              { content.button_text }
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/login" style={{ color: "#4dc497" }} >{ content.login_button }</Link>
          </div>
        </Card.Body>
        <hr/>
          <div className="w-100 text-center mt-2">
            { content.need_account } <Link style={{ color: "#4dc497" }} to="/signup">{ content.sign_up }</Link>
          </div>
      </Card>
    </div>
  );
}
