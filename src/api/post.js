import axios from "axios";

const head = {
  headers: { "Content-Type": "application/json" },
};

const url = "https://reactibook-api-laboratoria.herokuapp.com/post/"

const getPosts = async (uid) => {
  return axios
    .get(url+uid, head)
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
    .post(url, formData, head)
    .then((response) => {
      return response.data;
    });
};

const deletePost = async (id) => {
  return axios
    .delete(url+id, head)
    .then((response) => {
      return response.data;
    });
};

const updatePost = async (details, id) => {
  debugger;
  let data = {
    details: details,
  };
  return axios
    .patch(url+id, data, head)
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      alert(e);
    });
};

export { getPosts, createPost, deletePost, updatePost };
