import axios from "axios";

const mbtiTestInstance = axios.create({
  baseURL: "https://carpal-chestnut-blinker.glitch.me",
});

export default mbtiTestInstance;
