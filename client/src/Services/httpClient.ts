import axios from "axios";

//TODO attach access token from localStorage
let accessToken = localStorage.getItem("accessToken");

export default axios.create({
  baseURL: "https://url-shortener-easy-link.vercel.app/api/",
  headers: {
    authorization: `Bearer ${accessToken}`,
  },
});
