import axios from "axios";

const head = {
  headers: { 'Content-Type': 'application/json' }
};

const getPosts = async (uid) => {
  return axios.get(`http://localhost:3080/post/${uid}`, head).then((response) => {
    return response.data;
  });
};

const createPost = async (details, uid, email, privacy) => {
  let data = {
    details : details,
    uid: uid,
    email: email,
    privacy: privacy
  }
  return axios.post("http://localhost:3080/post", data, head).then((response) => {
    return response.data;
  });
};

const deletePost = async (id) => {
  return axios.delete(`http://localhost:3080/post/${id}`, head).then((response) => {
    return response.data;
  });
};

export { getPosts, createPost, deletePost };
