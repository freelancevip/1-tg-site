import axios from "axios";

export const ApiClient = axios.create({
    baseURL: `https://1c-tg-api.tunnelto.dev/api/`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

