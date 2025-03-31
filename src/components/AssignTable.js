import { Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";

const OrdersTable = ({ assigns }) => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Producto</TableCell>
                    <TableCell>Peso</TableCell>
                    <TableCell>Estado</TableCell>
                    <TableCell>Transportista</TableCell>
                    <TableCell>Tiempo de Entrega</TableCell>
                    <TableCell>Fecha de Creación</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {assigns.map((assign) => (
                    <TableRow key={assign.id_orden}>
                        <TableCell>{assign.id_orden}</TableCell>
                        <TableCell>{assign.tipo_producto}</TableCell>
                        <TableCell>{assign.peso}</TableCell>
                        <TableCell>{assign.direccion_destino}</TableCell>
                        <TableCell>{assign.estado_actual}</TableCell>
                        <TableCell>{assign.tiempo_entrega}</TableCell>
                        <TableCell>{assign.fecha_creacion}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default OrdersTable;
