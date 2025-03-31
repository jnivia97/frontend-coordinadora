import axios from "axios";
import { jwtDecode } from "jwt-decode";

const API_URL = "http://localhost:4000/order";

const API_URL_REPORT = "http://localhost:4000/report";

export const createOrder = async (orderData, token) => {
    const response = await axios.post(API_URL+"/new", orderData, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};

export const getOrdersByUser = async (token) => {
    const decodedToken = jwtDecode(token);
    
    const data = {
        id_usuario: decodedToken.id_user
    }
    const response = await axios.post(API_URL+"/user",data,{
        headers: { Authorization: `Bearer ${token}` },
    });

    return jwtDecode(response.data.token).data;
};


export const getOrdersByAll = async (token) => {
    
    const response = await axios.get(API_URL+"/all",{
        headers: { Authorization: `Bearer ${token}` },
    });

    return jwtDecode(response.data.token).data;
};


export const getOrdersByAllFilter = async (order) => {
    
    const response = await axios.post(API_URL+"/filter",order,{
        headers: { Authorization: `Bearer` },
    });

    console.log("datos: "+ jwtDecode(response.data.token).data)

    return jwtDecode(response.data.token).data;
};


export const getOrdersByPeriod = async (order) => {
    
    const response = await axios.post(API_URL_REPORT+"/period",order,{
        headers: { Authorization: `Bearer` },
    });

    console.log("datos: "+ jwtDecode(response.data.token).data)

    return jwtDecode(response.data.token).data;
};
