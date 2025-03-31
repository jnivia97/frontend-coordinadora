import { useEffect, useState } from "react";
import { Container, Typography, Button, TextField, Select, MenuItem } from "@mui/material";
import { getOrdersByAll, getOrdersByAllFilter, getOrdersByPeriod } from "../api/orders";
import { getRoutes } from "../api/routes";
import { getTransportistas, getTransportistasReport } from "../api/transportistas"
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import AssignRouteForm from "../components/AssignRouterForm";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import OrdersTable from "../components/OrdersTable";
import RouteTable from "../components/RouteTable";
import TransporTable from "../components/TansportsTable";
import AssignTable from "../components/AssignTable";
import TransportReport from "../components/TransportReport";
import MainReportPeriod from "../components/ReportPeriodMain";

const AdminDashboard = () => {
    const [orders, setOrders] = useState([]);
    const [transport, setTransports] = useState([]);
    const [route, setRoutes] = useState([]);
    const [assign, setAssigns] = useState([]);
    const [reportTransp, setReportTransp] = useState([]);
    const [reportPeriod, setReportPeriod] = useState([]);

    const [formData, setFormData] = useState({
        id_usuario: "",
        fechainicio: "",
        fechafin: "",
        estado: "",
        transportista: ""
    });

    const [formDataR, setFormDataR] = useState({
        fechainicio: "",
        fechafin: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "fechainicio" || name === "fechafin") {
            const formattedDate = new Date(value).toISOString().split("T")[0];
            setFormData({ ...formData, [name]: formattedDate });
        } else {
            setFormData({ ...formData, [name]: value });
        }

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!formData.fechainicio || !formData.fechafin || !formData.estado || !formData.transportista) {
            alert("Todos los campos son obligatorios.");
            return;
        }

        const dataToSend = {
            ...formData,
            fechainicio: formData.fechainicio ? new Date(formData.fechainicio).toISOString().split("T")[0] : null,
            fechafin: formData.fechafin ? new Date(formData.fechafin).toISOString().split("T")[0] : null
        };

        try {
            const dataList = await getOrdersByAllFilter(dataToSend);
            setAssigns(dataList);
            alert("Orden creada exitosamente");
            setFormData({ ...formData, fechainicio: "", fechafin: "", estado: "", transportista: "" });
        } catch (error) {
            console.error("Error al crear la orden:", error);
            alert("Hubo un error al crear la orden.");
        }


    }

    const handleChangeR = (e) => {
        const { name, value } = e.target;

        if (name === "fechainicio" || name === "fechafin") {
            const formattedDate = new Date(value).toISOString().split("T")[0];
            setFormDataR({ ...formDataR, [name]: formattedDate });
        } else {
            setFormDataR({ ...formDataR, [name]: value });
        }

    };

    const handleSubmitR = async (e) => {

        e.preventDefault();

        if (!formDataR.fechainicio || !formDataR.fechafin) {
            alert("Todos los campos son obligatorios.");
            return;
        }

        const dataToSend = {
            ...formDataR,
            fechainicio: formData.fechainicio ? new Date(formData.fechainicio).toISOString().split("T")[0] : null,
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

    const getReportTransport = async () => {

        try {
            const dataList = await getTransportistasReport();
            setReportTransp(dataList);
        } catch (error) {
            console.error("Error al crear la orden:", error);
            alert("Hubo un error al crear la orden.");
        }
    }


    useEffect(() => {
        const fetchOrders = async () => {
            const data = await getOrdersByAll(localStorage.getItem("token"));
            setOrders(data);

            const dataT = await getTransportistas(localStorage.getItem("token"));
            setTransports(dataT);

            const dataR = await getRoutes(localStorage.getItem("token"));
            setRoutes(dataR);

        };
        fetchOrders();

        getReportTransport();
    }, []);

    return (
        <Container>
            <Typography variant="h4">Panel de Administración</Typography>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography component="span">Asignar Ruta</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <AssignRouteForm />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography component="span">Ordenes</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <OrdersTable orders={orders} />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <Typography component="span">Rutas</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <RouteTable routes={route} />
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel4-content"
                    id="panel4-header"
                >
                    <Typography component="span">Transpotadores Disponibles</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TransporTable transports={transport} />
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel4-content"
                    id="panel4-header"
                >
                    <Typography component="span">Asignaciones de Ruta</Typography>
                </AccordionSummary>
                <AccordionDetails>

                    <form onSubmit={handleSubmit}>
                        <TextField label="Fecha Inicio" name="fechainicio" type="date" value={formData.fechainicio} onChange={handleChange} fullWidth margin="normal" />
                        <TextField label="Fecha Fin" name="fechafin" type="date" value={formData.fechafin} onChange={handleChange} fullWidth margin="normal" />
                        <Select
                            value={formData.estado}
                            name="estado"
                            label="Estado"
                            onChange={handleChange}
                            fullWidth
                        >
                            <MenuItem value={"En espera"}>En espera</MenuItem>
                            <MenuItem value={"En tránsito"}>En tránsito</MenuItem>
                            <MenuItem value={"Entregado"}>Entregado</MenuItem>
                        </Select>
                        <TextField label="Transportista" name="transportista" value={formData.transportista} onChange={handleChange} fullWidth margin="normal" />

                        <Button type="submit" variant="contained" color="primary">
                            Consultar
                        </Button>
                    </form>

                    <AssignTable assigns={assign}></AssignTable>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel4-content"
                    id="panel4-header"
                >
                    <Typography component="span">Métricas de Desempeño</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography component="span">Tiempo promedio de entrega por transportista</Typography>
                    <TransportReport data={reportTransp}></TransportReport>

                    <MainReportPeriod></MainReportPeriod>
                </AccordionDetails>
            </Accordion>



        </Container>
    );
};

export default AdminDashboard;
