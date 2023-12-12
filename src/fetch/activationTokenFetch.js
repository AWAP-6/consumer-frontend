import axios from "axios";

export const activateAccount = (token) => {
    return axios.get(`https://awap-6server.onrender.com/activation/act?token=${token}`);
};