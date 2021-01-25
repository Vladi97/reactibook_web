import React, { useState, useRef } from "react";
import { Form, Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { createPost } from "../api/post";

export default function CreatePostForm(props) {
  const detailsRef = useRef();
  const [error, setError] = useState("");
  const { currentUser } = useAuth();
  const content = props.content;

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await createPost(
        detailsRef.current.value,
        currentUser.uid,
        currentUser.email
      );
      detailsRef.current.value = "";
    } catch (e) {
      setError("Failed to create post");
    }
  }

  return (
    <>
      <Card style={{ height: "25vh", border: 0, borderBottom: 1 }}>
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="post">
              <Form.Control
                placeholder={content.input_text}
                as="textarea"
                required
                ref={detailsRef}
                style={{ minHeight: "120px" }}
              />
              <div className="d-flex justify-content-end">
                <Button
                  style={{ backgroundColor: "#4dc497", borderColor: "#4dc497" }}
                  className="btn btn-primary mt-2"
                  type="submit"
                >
                {content.button_text}
                </Button>
              </div>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
