import { useNavigate } from "react-router-dom";
import axios from "axios";

const AxiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8000/api",

});
AxiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("pizzaHutToken");
        if(token){
            config.headers.Authorization = `Bearer ${token}`;

        }
       
        return config;

    },
    (error) => {
        return Promise.reject(error);
    }
    );
export default AxiosInstance;