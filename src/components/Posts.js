import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { getPosts } from "../api/post";
import { Link } from "react-router-dom";
import Post from "./Post";

export default function Posts(props) {
  const [posts, setPosts] = useState([]);
  const [privacy, setPrivacy] = useState("public");
  const { currentUser } = useAuth();
  const content = props.content;
  const uid = currentUser.uid;

  useEffect(() => {
    fetchMyAPI();
  });

  async function fetchMyAPI() {
    setPosts(await getPosts(uid));
  }

  return (
    <>
      <div className="pb-2">
        <div
          className="d-flex justify-content-center align-items-center mb-2"
          style={{ color: "#4dc497" }}
        >
          <b>
            <Link
              onClick={() => {
                setPrivacy("public");
              }}
              className="mr-2"
              style={{ color: "#4dc497" }}
            >
              {content.filter_public}
            </Link>
            |
            <Link
              onClick={() => {
                setPrivacy("friend");
              }}
              className="ml-2"
              style={{ color: "#4dc497" }}
            >
              {content.filter_friends}
            </Link>
          </b>
        </div>
        {posts.post !== undefined
          ? posts.post.map((data, key) => {
              if (
                (data.privacy === privacy && privacy === "friend") ||
                privacy === "public"
              ) {
                return (
                  <Post key={key} content={content} data={data} />
                );
              }
            })
          : ""}
      </div>
    </>
  );
}
