import axios from "axios";
import { jwtDecode } from "jwt-decode";

const API_URL_ASSIGN = "http://localhost:4000/assign";
const API_URL_ROUTE = "http://localhost:4000/route" 

// Obtener todas las rutas disponibles
export const getRoutes = async () => {
    try {
        const response = await axios.get(`${API_URL_ROUTE}/all`);
        console.log(jwtDecode(response.data.token).data)
        return jwtDecode(response.data.token).data;
    } catch (error) {
        console.error("Error obteniendo las rutas:", error);
        return [];
    }
};


export const assignRoute = async (data) => {
    try {
        const response = await axios.post(`${API_URL_ASSIGN}/new`,data);
        return response.data; 
    } catch (error) {
        console.error("Error obteniendo las rutas:", error);
        return [];
    }
};
