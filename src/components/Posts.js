import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { getPosts, deletePost } from "../api/post";
import { Link } from "react-router-dom";

export default function Posts(props) {
  const [posts, setPosts] = useState([]);
  const { currentUser } = useAuth();
  const content = props.content;
  const uid = currentUser.uid;

  useEffect(() => {
    fetchMyAPI();
  });

  async function fetchMyAPI() {
    setPosts(await getPosts(uid));
  }

  async function handleDeletePost(id) {
    await deletePost(id);
    await fetchMyAPI();
  }

  return (
    <>
      <div className="pb-2">
        <div
          className="d-flex justify-content-center align-items-center mb-2"
          style={{ color: "#4dc497" }}
        >
          <b>
            <Link className="mr-2" style={{ color: "#4dc497" }}>
              {content.filter_public}
            </Link>
            |
            <Link className="ml-2" style={{ color: "#4dc497" }}>
              {content.filter_friends}
            </Link>
          </b>
        </div>
        {posts.post !== undefined
          ? posts.post.map((data, key) => {
              return (
                <Card key={key} className="mb-1">
                  <Card.Body>
                    <p>{data.details}</p>
                    {data.email === currentUser.email ? (
                      <div>
                        <Link style={{ color: "#4dc497" }}>
                          {content.edit_button}
                        </Link>
                        <Link
                          id="delete"
                          className="ml-2"
                          onClick={() => {
                            handleDeletePost(data._id);
                          }}
                          style={{ color: "#4dc497" }}
                        >
                          {content.delete_button}
                        </Link>
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
    </>
  );
}
