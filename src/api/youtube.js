import axios from "axios";

export default axios.create({
  baseURL: "https://googleapi.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 5,
    key: "AIzaSyBKTING-Bm18wA1ZuoveQtrRMk12JmaZ40",
  },
});