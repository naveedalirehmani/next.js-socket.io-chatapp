import axios from 'axios';

export const axiosSignup = axios.create({
    baseURL: "http://localhost:4000/api/user",
})
