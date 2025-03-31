import { useEffect, useState } from "react";
import { Container, Typography, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { getRutas } from "../api/rutas";

const Rutas = () => {
    const [rutas, setRutas] = useState([]);

    useEffect(() => {
        const fetchRutas = async () => {
            const data = await getRutas();
            setRutas(data);
        };
        fetchRutas();
    }, []);

    return (
        <Container>
            <Typography variant="h4">Gestión de Rutas</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Origen</TableCell>
                        <TableCell>Destino</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rutas.map((ruta) => (
                        <TableRow key={ruta.id_ruta}>
                            <TableCell>{ruta.nombre_ruta}</TableCell>
                            <TableCell>{ruta.origen}</TableCell>
                            <TableCell>{ruta.destino}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Container>
    );
};

export default Rutas;
