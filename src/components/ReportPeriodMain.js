import { useEffect, useState } from "react";
import { Container, Typography, Button, TextField } from "@mui/material";
import { getOrdersByPeriod } from "../api/orders";
import PeriodReport from "../components/periodReport";

const MainReportPeriod = () => {
    const [reportPeriod, setReportPeriod] = useState([]);

    const [formData, setFormData] = useState({
        fechainicio: "",
        fechafin: ""
    });

    const handleChangeR = (e) => {
        const { name, value } = e.target;

        if (name === "fechainicio" || name === "fechafin") {
            const formattedDate = new Date(value).toISOString().split("T")[0];
            setFormData({ ...formData, [name]: formattedDate });
        } else {
            setFormData({ ...formData, [name]: value });
        }

    };

    const handleSubmitR = async (e) => {

        e.preventDefault();

        if (!formData.fechainicio || !formData.fechafin) {
            alert("Todos los campos son obligatorios.");
            return;
        }

        const dataToSend = {
            ...formData,
            fechaini: formData.fechainicio ? new Date(formData.fechainicio).toISOString().split("T")[0] : null,
            fechafin: formData.fechafin ? new Date(formData.fechafin).toISOString().split("T")[0] : null
        };

        try {

            const dataList = await getOrdersByPeriod(dataToSend);
            setReportPeriod(dataList);
        } catch (error) {
            console.error("Error al crear la orden:", error);
            alert("Hubo un error al crear la orden.");
        }


    }

    return (
        <Container>

            <Typography component="span">Cantidad de envíos completados en un período</Typography>

            <form onSubmit={handleSubmitR}>
                <TextField label="Fecha Inicio" name="fechainicio" type="date" value={formData.fechainicio} onChange={handleChangeR} fullWidth margin="normal" />
                <TextField label="Fecha Fin" name="fechafin" type="date" value={formData.fechafin} onChange={handleChangeR} fullWidth margin="normal" />

                <Button type="submit" variant="contained" color="primary">
                    Consultar
                </Button>
            </form>
            <PeriodReport data={reportPeriod}></PeriodReport>

        </Container>
    );
};

export default MainReportPeriod;
