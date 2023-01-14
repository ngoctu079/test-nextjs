import axios from "axios";

export const fetchData = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL + "/api",
  timeout: 1000,
});