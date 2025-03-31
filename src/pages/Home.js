import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Container sx={{ textAlign: "center", mt: 5 }}>
            <Typography variant="h3">Bienvenido al Sistema de Gestión de Envíos</Typography>
            <Typography variant="h6" sx={{ mt: 2 }}>
                Optimiza la gestión de tus envíos con nuestra plataforma segura y eficiente.
            </Typography>
            <Button variant="outlined" color="secondary" sx={{ mt: 3, ml: 2 }} component={Link} to="/login">
                Iniciar sesión
            </Button>
        </Container>
    );
};

export default Home;
