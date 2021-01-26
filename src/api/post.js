import axios from "axios";

const head = {
  headers: { "Content-Type": "application/json" },
};

const url = "https://reactibook-api-laboratoria.herokuapp.com/post/";

const getPosts = async (uid) => {
  return await axios.get(url + uid).then((response) => {
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
  axios.post(url, formData, {header: { 'Content-Type': 'multipart/form-data'}})
    .then(response => console.log(response))
    .catch(errors => console.log(errors));
};

const deletePost = async (id) => {
  return axios.delete(url + id, head).then((response) => {
    return response.data;
  });
};

const updatePost = async (details, id) => {
  let data = {
    details: details,
  };
  return await axios
    .patch(url + id, data, head)
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      alert(e);
    });
};

export { getPosts, createPost, deletePost, updatePost };
