import generalConfig from "./generalConfig.js";
import axios from "axios";

const API_URL = generalConfig.apiUrl;

const post = (resource, data) => axios.post(`${API_URL}/${resource}`, data);
const get = resource => axios.get(`${API_URL}/${resource}`);

export const createNewPost = (content, author) => {
  const data = {
    content: content,
    author: author
  };
  post("posts", data);
};

export const getNewPost = () => {
  get("posts");
};
