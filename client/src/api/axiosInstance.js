import axios from "axios";
const instance = axios.create({
    // baseURL: "https://petlevert-57yoh.ondigitalocean.app/",
    baseURL: "http://localhost:5050/",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

export default instance;
