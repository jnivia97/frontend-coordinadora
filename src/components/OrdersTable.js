import { Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";

const OrdersTable = ({ orders }) => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Destino</TableCell>
                    <TableCell>Estado</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {orders.map((order) => (
                    <TableRow key={order.id_orden}>
                        <TableCell>{order.id_orden}</TableCell>
                        <TableCell>{order.direccion_destino}</TableCell>
                        <TableCell>{order.estado}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default OrdersTable;
