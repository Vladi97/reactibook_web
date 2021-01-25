import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Login(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, setToken } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const content = props.content;

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      await setToken();
      history.push("/home");
    } catch (e) {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <>
      <Card className="w-100 col-xl-12">
        <Card.Body>
          <h2 className="text-center mb-4" style={{ color: "#4dc497" }} >{content.form_title}</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>{content.email_input}</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                value="vmatarrita88@gmail.com"
                required
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>{content.password_input}</Form.Label>
              <Form.Control
                type="password"
                value="Vladi1010"
                ref={passwordRef}
                required
              />
            </Form.Group>
            <Button disabled={loading} style={{ backgroundColor: "#4dc497", borderColor: "#4dc497" }} className="w-100" type="submit">
              {content.login_button}
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password" style={{ color: "#4dc497" }} >{content.forgot_password_link}</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="col-xl-10 w-100 text-center mt-2 bg-green">
        {content.need_account} <Link to="/signup" style={{ color: "#4dc497" }} >{content.sign_up}</Link>
      </div>
    </>
  );
}
