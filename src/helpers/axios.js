import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://thebetter.bsgroup.eu",
  headers: { "Content-Type": "application/json; charset=utf-8" },
});

export { axiosInstance };
