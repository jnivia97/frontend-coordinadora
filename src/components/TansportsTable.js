import { Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";

const TransportTable = ({ transports }) => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Capacidad</TableCell>
                    <TableCell>Disponibilidad</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {transports.map((transport) => (
                    <TableRow key={transport.id_transportista}>
                        <TableCell>{transport.id_transportista}</TableCell>
                        <TableCell>{transport.nombre}</TableCell>
                        <TableCell>{transport.capacidad_vehiculo}</TableCell>
                        <TableCell>{transport.disponible}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default TransportTable;
