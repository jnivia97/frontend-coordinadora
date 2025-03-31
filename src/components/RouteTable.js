import { Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";

const TableRoute = ({ routes }) => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Origen</TableCell>
                    <TableCell>Destino</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {routes.map((route) => (
                    <TableRow key={route.id_ruta}>
                        <TableCell>{route.id_ruta}</TableCell>
                        <TableCell>{route.nombre_ruta}</TableCell>
                        <TableCell>{route.origen}</TableCell>
                        <TableCell>{route.destino}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default TableRoute;
