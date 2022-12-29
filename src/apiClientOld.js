import axios from "axios";

// TODO - remove this client (dev only)
export const axiosClientOld = axios.create({
    // baseURL: `http://localhost:3000/api/`,
    baseURL: `https://customs.freelancevip.pro/api/`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

