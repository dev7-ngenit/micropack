import axios from "axios";

const axiosSecure = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_ORIGIN,
});

export default function useAxiosSecure() {
  return axiosSecure;
}
