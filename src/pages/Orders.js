import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { getOrdersByUser } from "../api/orders";
import { Container, Typography, List, ListItem, ListItemText, Paper } from "@mui/material";
import OrderForm from "../components/OrderForm";

const Orders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const data = await getOrdersByUser(localStorage.getItem("token"));
            setOrders(data);
        };
        fetchOrders();
    }, []);

    return (
        <Container>
            <Typography variant="h4">Mis Envíos</Typography>
            <OrderForm />
            <Paper>
                <List>
                    {orders.map((order) => (
                        <ListItem key={order.id_orden}>
                            <ListItemText
                                primary={`Pedido #${order.id_orden} - Estado: ${order.estado}`}
                                secondary={`Destino: ${order.direccion_destino} - Peso: ${order.peso}kg`}
                            />
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Container>
    );
};

export default Orders;
