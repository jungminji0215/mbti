import axios from "axios";

const mbtiTestInstance = axios.create({
  baseURL: "http://localhost:4000",
});

export default mbtiTestInstance;
