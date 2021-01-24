import React, { useState, useEffect, useRef } from "react";
import { Form, Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { getPosts, createPost, deletePost } from "../api/post";

export default function Home() {
  const detailsRef = useRef();
  const [error, setError] = useState("");
  const [posts, setPosts] = useState([]);
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const uid = currentUser.uid;

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
    fetchMyAPI();
  }, []);

  async function fetchMyAPI() {
    setPosts(await getPosts(uid));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await createPost(
        detailsRef.current.value,
        currentUser.uid,
        currentUser.email
      );
      detailsRef.current.value = "";
      await fetchMyAPI();
    } catch (e) {
      setError("Failed to create post");
    }
  }

  async function handleDeletePost(id) {
    await deletePost(id);
    await fetchMyAPI();
  }

  return (
    <>
      <Card style={{ height: "30h" }}>
        <Card.Body>
          {/* <h2 className="text-center mb-4">Profile</h2> */}
          {error && <Alert variant="danger">{error}</Alert>}
          {/* <strong>Email:</strong> {currentUser.uid} */}
          {/* <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link> */}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="post">
              <Form.Control
                placeholder="Qué está pasando?"
                as="textarea"
                required
                ref={detailsRef}
                style={{ minHeight: "120px" }}
              />
              <div className="d-flex justify-content-end">
                <Button className="btn btn-primary mt-2" type="submit">
                  publicar
                </Button>
              </div>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
      <div className="pb-2" style={{ height: "50vh", overflowY: "scroll" }}>
        {posts.post !== undefined
          ? posts.post.reverse().map((data, key) => {
              return (
                <Card key={key}>
                  <Card.Body>
                    <p>{data.details}</p>
                    {data.email === currentUser.email ? (
                      <div>
                        <Button type="submit">Editar</Button>
                        <Button
                          id="delete"
                          type="submit"
                          className="ml-2"
                          onClick={() => {
                            handleDeletePost(data._id);
                          }}
                        >
                          Eliminar
                        </Button>
                      </div>
                    ) : (
                      ""
                    )}
                  </Card.Body>
                </Card>
              );
            })
          : ""}
      </div>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  );
}
