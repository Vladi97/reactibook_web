import React from "react";
import CreatePost from "../components/CreatePostForm";
import Posts from "../components/Posts";
import Header from "../components/Header";

export default function HomePage() {
  const content = {
    English: {
      home_page: {
        create_post: {
          input_text: "What's going on?",
          button_text: "Publish",
        },
        posts: {
          delete_button: "Delete",
          edit_button: "Edit",
          filter_friends: "Friends",
          filter_public: "Public"
        }
      },
    },
    Spanish: {
      home_page: {
        create_post: {
          input_text: "¿Qué está pasando?",
          button_text: "Publicar",
          filter_friends: "Amigos",
          filter_public: "Público"
        },
        posts: {
          delete_button: "Eliminar",
          edit_button: "Editar"
        }
      },
    },
  };

  let dataContent = {};
  navigator.language.toLowerCase().includes("es")
    ? (dataContent = content.Spanish)
    : (dataContent = content.English);

  return (
    <div className="w-100">
      <div style={{ position: "fixed", top: 0, width: "100%", zIndex: 1 }}>
        <Header />
      </div>
      <div className="w-100 mr-0 mt-5">
        <div style={{ position: "fixed", width: "100%", zIndex: 1 }}>
          <div className="mb-3 create-post w-100 mt-2 col-12 col-sm-12 col-md-8 col-xl-8 offset-xl-2">
            <CreatePost content={dataContent.home_page.create_post} />
          </div>
        </div>
        <div
          className="posts w-100 col-12 col-sm-12 col-md-8 col-xl-8 offset-xl-2"
          style={{ top: "35vh" }}
        >
          <Posts content={dataContent.home_page.posts} />
        </div>
      </div>
    </div>
  );
}
