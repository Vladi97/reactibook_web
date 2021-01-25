import React, { useState } from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { deletePost, updatePost } from "../api/post";

export default function Post(props) {
  const data = props.data;
  const [editable, setEditable] = useState(false);
  const content = props.content;
  const { currentUser } = useAuth();

  async function handleDeletePost(id) {
    await deletePost(id);
  }

  function handleEditClick(id) {
    document.getElementById(id).setAttribute("contenteditable", !editable);
    setEditable(!editable);
  }

  async function handleUpdatePost(id) {
    let detail = document.getElementById(`details${id}`).innerText;
    document
      .getElementById(`details${id}`)
      .setAttribute("contenteditable", !editable);
    await updatePost(detail, id);
    setEditable(!editable);
  }

  return (
    <div>
      <Card className="mb-1">
        <Card.Body>
          {data.image !== "" ? (
            <img
              width="100%"
              height="auto"
              src={`https://reactibook-api-laboratoria.herokuapp.com/${data.image}`}
              alt="post"
            />
          ) : (
            ""
          )}
          <p id={`details${data._id}`}>{data.details}</p>
          {data.email === currentUser.email ? (
            <>
              <div style={{ display: !editable ? "block" : "none" }}>
                <Link
                  style={{ color: "#4dc497" }}
                  onClick={() => {
                    handleEditClick(`details${data._id}`);
                  }}
                >
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
              <div style={{ display: editable ? "block" : "none" }}>
                <Link
                  style={{ color: "#4dc497" }}
                  onClick={() => {
                    handleUpdatePost(data._id);
                  }}
                >
                  Guardar
                </Link>
              </div>
            </>
          ) : (
            ""
          )}
        </Card.Body>
      </Card>
    </div>
  );
}
