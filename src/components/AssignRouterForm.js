import { useState } from "react";
import { assignRoute } from "../api/routes";
import { Button, TextField, Container } from "@mui/material";

const AssignRouteForm = () => {
    const [formData, setFormData] = useState({
        id_orden: "",
        id_ruta: "",
        id_transportista: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await assignRoute(formData);
        alert("Ruta asignada con éxito");
        window.location.reload();
    };

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <TextField label="ID Orden" name="id_orden" onChange={handleChange} fullWidth margin="normal" />
                <TextField label="ID Ruta" name="id_ruta" onChange={handleChange} fullWidth margin="normal" />
                <TextField label="ID Transportista" name="id_transportista" onChange={handleChange} fullWidth margin="normal" />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Asignar Ruta
                </Button>
            </form>
        </Container>
    );
};

export default AssignRouteForm;
