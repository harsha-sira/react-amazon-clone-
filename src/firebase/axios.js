import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-a360c/us-central1/api", // API URL
});

export default instance;
