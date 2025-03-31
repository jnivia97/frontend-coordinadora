import axios from "axios";
import { jwtDecode } from "jwt-decode";

const API_URL = "http://localhost:4000/transport";

const API_URL_REPORT = "http://localhost:4000/report"

// Obtener todos los transportistas
export const getTransportistas = async () => {
    try {
        const response = await axios.get(`${API_URL}/allfree`);
        console.log(jwtDecode(response.data.token).data)
        return jwtDecode(response.data.token).data;
    } catch (error) {
        console.error("Error obteniendo transportistas:", error);
        return [];
    }
};

export const getTransportistasReport = async () => {
    try {
        const response = await axios.get(`${API_URL_REPORT}/transp`);
        return jwtDecode(response.data.token).data;
    } catch (error) {
        console.error("Error obteniendo transportistas:", error);
        return [];
    }
};
