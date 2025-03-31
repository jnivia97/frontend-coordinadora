import { Container, Typography } from "@mui/material";
import Orders from './Orders';

const Dashboard = () => {
    return (
        <Container>
            <Typography variant="h4">Bienvenido al Dashboard</Typography>

            <Orders></Orders> 
        </Container>
    );
};

export default Dashboard;
