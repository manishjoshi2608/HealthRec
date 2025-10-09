import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://healthrec.unstablehosting.co.in/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});
