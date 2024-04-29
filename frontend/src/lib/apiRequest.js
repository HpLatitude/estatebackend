import axios from "axios";
// const port = process.env.PORT || 5173;
const apiRequest = axios.create({
  baseURL: "https://estatebackend-1pbx.onrender.com/server",
  //  baseURL: "http://localhost:8800/server",
  
  withCredentials: true,
});

export default apiRequest;