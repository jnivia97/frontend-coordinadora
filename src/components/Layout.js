import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";

const Layout = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
    };

    return (
        <>
            <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
            <Outlet />
        </>
    );
};

export default Layout;
