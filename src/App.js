import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Orders from "./pages/Orders";
import Tracking from "./pages/Tracking";
import AdminDashboard from "./pages/AdminDashboard";
import PrivateRoute from "./components/PrivateRouter";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                    <Route path="/orders" element={<PrivateRoute><Orders /></PrivateRoute>} />
                    <Route path="/tracking" element={<PrivateRoute><Tracking /></PrivateRoute>} />
                    <Route path="/admin" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
