import React, { useState, useRef } from "react";
import { Form, Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { createPost } from "../api/post";
import { FaImage } from "react-icons/fa";

export default function CreatePostForm(props) {
  const detailsRef = useRef();
  const typeRef = useRef();
  const [file, setFile] = useState();
  const [error, setError] = useState("");
  const { currentUser } = useAuth();
  const content = props.content;

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await createPost(
        detailsRef.current.value,
        currentUser.uid,
        currentUser.email,
        typeRef.current.value,
        file
      );
      detailsRef.current.value = "";
    } catch (error) {
      setError(error);
    }
    setFile(undefined)
  }

  function handleFileUpload(e) {
    setFile(e.target.files[0]);
  }

  return (
    <>
      <Card style={{ height: "25vh", border: 0, borderBottom: 1 }}>
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form id="create-form" onSubmit={handleSubmit}>
            <Form.Group id="post">
              <Form.Control
                placeholder={content.input_text}
                as="textarea"
                name="details"
                required
                ref={detailsRef}
                style={{ minHeight: "120px" }}
              />
              <div className="d-flex justify-content-end align-items-center">
                <label className="mr-4 mt-3">
                  <input
                  name="postImage"
                    type="file"
                    accept="image/x-png,image/gif,image/jpeg"
                    onChange={handleFileUpload}
                    style={{
                      backgroundColor: "#fff",
                      color: "#4dc497",
                      borderColor: "#fff",
                      display: "none",
                    }}
                  />
                  <FaImage fontSize={30} />
                </label>
                <Form.Control
                  ref={typeRef}
                  as="select"
                  name="postImage"
                  className="btn btn-primary mt-2 mr-2 col-xl-2"
                  style={{
                    backgroundColor: "#fff",
                    color: "#4dc497",
                    borderColor: "#4dc497",
                  }}
                >
                  <option value="public">{content.filter_public}</option>
                  <option value="friend">{content.filter_friends}</option>
                </Form.Control>
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
