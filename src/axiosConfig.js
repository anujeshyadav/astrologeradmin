import axios from "axios";

const instance = axios.create({
  baseURL: "https://nodejsbackend.astrologically.in",

  // baseURL: "https://nodejsbackend.astrologically.in",
  // baseURL: "https://nodejsbackend.astrologically.in",
});

export default instance;
