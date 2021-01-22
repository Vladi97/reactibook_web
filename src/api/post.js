import axios from "axios";

const head = {
  headers: { 'Content-Type': 'application/json' }
};

const getPosts = async () => {
  return axios.get("http://localhost:3080/post", head).then((response) => {
    return response.data;
  });
};

const createPost = async (details, uid) => {
  debugger
  let data = {
    details : details,
    uid: uid
  }
  return axios.post("http://localhost:3080/post", data, head).then((response) => {
    return response.data;
  });
};

export { getPosts, createPost };
