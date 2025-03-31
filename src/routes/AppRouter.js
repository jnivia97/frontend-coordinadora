import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";

import PrivateRoute from "../components/PrivateRoute";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                
            </Routes>
        </Router>
    );
};

export default AppRouter;
