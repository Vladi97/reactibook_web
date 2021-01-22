import React, { useState, useEffect, useRef } from "react";
import { Form, Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { getPosts, createPost } from '../api/post'

export default function Home() {
  const detailsRef = useRef();
  const [error, setError] = useState("");
  const { currentUser, logout, getToken } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  useEffect(() => {
    async function fetchMyAPI() {
      await getPosts()
    }

    fetchMyAPI();
    console.log(currentUser.uid);
    console.log(getToken());
  });

  async function handleCreatePost(e){
    e.preventDefault();

    try {
      await createPost(detailsRef.current.value, currentUser.uid);
    } catch(e) {
      setError("Failed to create post");
    }
  }

  return (
    <>
      <Card>
        <Card.Body>
          {/* <h2 className="text-center mb-4">Profile</h2> */}
          {error && <Alert variant="danger">{error}</Alert>}
          {/* <strong>Email:</strong> {currentUser.uid} */}
          {/* <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link> */}
          <Form>
            <Form.Group id="post">
              <Form.Control
                placeholder="Qué está pasando?"
                as="textarea"
                required
                ref={detailsRef}
                style={{ minHeight: "120px" }}
              />
              <div className="d-flex justify-content-end">
                <Button className="btn btn-primary mt-2" type="submit" onClick={handleCreatePost}>
                  publicar
                </Button>
              </div>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  );
}
