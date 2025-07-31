// Axios instance for public requests
import axios from "axios";

const publicHttp = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default publicHttp;
