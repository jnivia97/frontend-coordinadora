import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ isAuthenticated, onLogout }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        onLogout();
        navigate("/login");
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Gestión de Envíos
                </Typography>
                <Button color="inherit" component={Link} to="/">Inicio</Button>
                {isAuthenticated ? (
                    <>
                        <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
                        <Button color="inherit" onClick={handleLogout}>Cerrar sesión</Button>
                    </>
                ) : (
                    <>
                        <Button color="inherit" component={Link} to="/login">Iniciar sesión</Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
