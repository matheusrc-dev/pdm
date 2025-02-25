import axios from "axios";

const api = axios.create({
  // baseURL: "http://10.0.2.2:8090/", // android emulator accessing pocketbase on localhost
  baseURL: "https://6742-177-87-200-35.ngrok-free.app/", // ios simulator accessing pocketbase on localhost
  // baseURL: "http://your.own.deploy/", // any case accessing pocketbase hosted online
});

export default api;
