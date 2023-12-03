import axios from "axios";

export const activateAccount = (token) => {
    return axios.get(`http://localhost:8080/activation/act?token=${token}`);
};