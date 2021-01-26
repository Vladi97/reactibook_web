import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Signup(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const content = props.content;

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch (e) {
      setError(e.message);
    }

    setLoading(false);
  }

  return (
    <div className="h-100 d-flex justify-content-center align-items-center">
      <Card style={{ border: 0 }} className="col-11 col-sm-8 col-md-6 col-l-5 col-xl-4">
        <Card.Body>
          <h2 className="text-center mb-4" style={{ color: "#4dc497" }} >{ content.title }</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>{ content.email_input }</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>{ content.password_input }</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>{ content.passwordconf_input }</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button style={{ backgroundColor: "#4dc497", borderColor: "#4dc497" }} disabled={loading} className="w-100" type="submit">
            { content.button }
            </Button>
          </Form>
        </Card.Body>
        <hr/>
        <div className="w-100 text-center mt-2">
          { content.already_have_account } <Link to="/login" style={{ color: "#4dc497" }} >{ content.login_link }</Link>
        </div>
      </Card>
    </div>
  );
}
