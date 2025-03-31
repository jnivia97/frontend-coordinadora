import { useState } from "react";
import { Container, TextField, Button, Typography, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth";
import { jwtDecode } from "jwt-decode";

const Login = () => {
    const [formData, setFormData] = useState({ correo: "", contraseña: "" });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = await loginUser(formData);
            localStorage.setItem("token", token);
            const decodedToken = jwtDecode(token);
            if(decodedToken.rol == "usuario" ){
                navigate("/dashboard");
            }else{
                navigate("/admin");
            }
            
        } catch (err) {
            setError("Credenciales incorrectas. Intenta de nuevo.");
        }
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" sx={{ mb: 3 }}>Iniciar Sesión</Typography>
            {error && <Alert severity="error">{error}</Alert>}
            <form onSubmit={handleSubmit}>
                <TextField label="Correo" name="correo" type="email" fullWidth margin="normal" onChange={handleChange} required />
                <TextField label="Contraseña" name="contraseña" type="password" fullWidth margin="normal" onChange={handleChange} required />
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                    Iniciar Sesión
                </Button>
            </form>
        </Container>
    );
};

export default Login;
