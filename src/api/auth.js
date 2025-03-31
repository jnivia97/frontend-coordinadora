import axios from "axios";
import { jwtDecode } from "jwt-decode";

const API_URL = "http://localhost:4000/user/into";

export const loginUser = async (credentials) => {
    const data ={
        email: credentials.correo,
        password: credentials.contraseña
    }
    const response = await axios.post(`${API_URL}`, data);
    const token = response.data.token;
    
    const decodedToken = jwtDecode(token);
    console.log("Usuario autenticado:", decodedToken);

    return token;
};
