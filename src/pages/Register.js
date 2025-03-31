import { useState } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [formData, setFormData] = useState({ nombre: "", correo: "", contraseña: "", rol: "usuario" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        //await registerUser(formData);
        navigate("/login");
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" sx={{ mb: 3 }}>Registro de Usuario</Typography>
            <form onSubmit={handleSubmit}>
                <TextField label="Nombre" name="nombre" fullWidth margin="normal" onChange={handleChange} required />
                <TextField label="Correo" name="correo" type="email" fullWidth margin="normal" onChange={handleChange} required />
                <TextField label="Contraseña" name="contraseña" type="password" fullWidth margin="normal" onChange={handleChange} required />
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                    Registrarse
                </Button>
            </form>
        </Container>
    );
};

export default Register;
