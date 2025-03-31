import { useEffect, useState } from "react";
import { Container, Typography, Table, TableBody, TableCell, TableHead, TableRow, Button } from "@mui/material";
import { getTransportistas } from "../api/transportistas";

const Transportistas = () => {
    const [transportistas, setTransportistas] = useState([]);

    useEffect(() => {
        const fetchTransportistas = async () => {
            const data = await getTransportistas();
            setTransportistas(data);
        };
        fetchTransportistas();
    }, []);

    return (
        <Container>
            <Typography variant="h4">Gestión de Transportistas</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Capacidad</TableCell>
                        <TableCell>Disponibilidad</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {transportistas.map((t) => (
                        <TableRow key={t.id_transportista}>
                            <TableCell>{t.nombre}</TableCell>
                            <TableCell>{t.capacidad_vehiculo} kg</TableCell>
                            <TableCell>{t.disponible ? "Disponible" : "Ocupado"}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Container>
    );
};

export default Transportistas;
