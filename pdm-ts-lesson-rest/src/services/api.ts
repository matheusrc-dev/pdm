import axios from "axios";

const api = axios.create({
  // baseURL: "http://10.0.2.2:8090/", // android emulator accessing pocketbase on localhost
  baseURL: "https://ddef-186-226-54-153.ngrok-free.app/", // ios simulator accessing pocketbase on localhost
  // baseURL: "http://your.own.deploy/", // any case accessing pocketbase hosted online
});

export default api;
