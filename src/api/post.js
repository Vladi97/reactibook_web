import axios from "axios";

const head = {
  headers: { "Content-Type": "application/json" },
};

const getPosts = async (uid) => {
  return axios
    .get(`http://localhost:3080/post/${uid}`, head)
    .then((response) => {
      return response.data;
    });
};

const createPost = async (details, uid, email, privacy, image) => {
  let formData = new FormData();
  formData.append("postImage", image);
  formData.append("details", details);
  formData.append("uid", uid);
  formData.append("privacy", privacy);
  formData.append("email", email);
  
  return axios
    .post("http://localhost:3080/post", formData, head)
    .then((response) => {
      return response.data;
    });
};

const deletePost = async (id) => {
  return axios
    .delete(`http://localhost:3080/post/${id}`, head)
    .then((response) => {
      return response.data;
    });
};

const updatePost = async (details, id) => {
  debugger;
  let data = {
    details: details,
  };
  let url = `http://localhost:3080/post/${id}`;
  return axios
    .patch(`http://localhost:3080/post/${id}`, data, head)
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      alert(e);
    });
};

export { getPosts, createPost, deletePost, updatePost };
