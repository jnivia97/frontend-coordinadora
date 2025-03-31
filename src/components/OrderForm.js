import { useEffect, useState } from "react";
import { createOrder } from "../api/orders";
import { TextField, Button, Container } from "@mui/material";
import { jwtDecode } from "jwt-decode";

const OrderForm = () => {

    const token = localStorage.getItem("token");

    const [formData, setFormData] = useState({
        id_usuario: "",
        peso: "",
        dimensiones: "",
        tipo_producto: "",
        direccion_destino: "",
        estado: "En espera",
        fecha_creacion: new Date().toISOString().slice(0, 19).replace("T", " "),
        fecha_entrega: ""
    });


    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevState) => ({
            ...prevState,
            [name]: name === "peso" ? parseFloat(value) || "" : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.peso || !formData.dimensiones || !formData.tipo_producto || !formData.direccion_destino) {
            alert("Todos los campos son obligatorios.");
            return;
        }

        const fechaEntrega = new Date(new Date().getTime() + 6 * 60 * 60 * 1000)
            .toISOString()
            .slice(0, 19)
            .replace("T", " ");

        const orderData = { ...formData, fecha_entrega: fechaEntrega };

      

        try {
            await createOrder(orderData, token);
            alert("Orden creada exitosamente");
            setFormData({ ...formData, peso: "", dimensiones: "", tipo_producto: "", direccion_destino: "" });
            window.location.reload();
        } catch (error) {
            console.error("Error al crear la orden:", error);
            alert("Hubo un error al crear la orden.");
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        const userData = token ? jwtDecode(token) : null;
        const userId = userData.id_user || "";
        setFormData((prevState) => ({
            ...prevState,
            id_usuario: userId || ""
        }));
    }, [])

    return (
        <Container>
            <h2>Crear Nueva Orden</h2>
            <form onSubmit={handleSubmit}>
                <TextField label="Peso" name="peso" type="number" value={formData.peso} onChange={handleChange} fullWidth margin="normal" />
                <TextField label="Dimensiones" name="dimensiones" value={formData.dimensiones} onChange={handleChange} fullWidth margin="normal" />
                <TextField label="Tipo de Producto" name="tipo_producto" value={formData.tipo_producto} onChange={handleChange} fullWidth margin="normal" />
                <TextField label="Dirección de Destino" name="direccion_destino" value={formData.direccion_destino} onChange={handleChange} fullWidth margin="normal" />

                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Crear Orden
                </Button>
            </form>
        </Container>
    );
};

export default OrderForm;
