import axios from "axios";
import queryString from "query-string";

// const baseURL = "https://moonflix-api.vercel.app/api/v1/";
const baseURL = "https://moviesbackend.vercel.app/api/v1/";
// const baseURL = "http://localhost:6005/api/v1/";


// https://api.themoviedb.org/3/movie/popular?api_key=9891188f8ef54e39f9ac7b08a3297270

const privateClient = axios.create({
  baseURL,
  paramsSerializer: {
    encode: params => queryString.stringify(params)
  }
});

privateClient.interceptors.request.use(async config => {
  return {
    ...config,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("actkn")}`
    }
  };
});

privateClient.interceptors.response.use((response) => {
  if (response && response.data) return response.data;
  return response;
}, (err) => {
  throw err.response.data;
});

export default privateClient;