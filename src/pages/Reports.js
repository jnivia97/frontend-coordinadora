import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import { getReports } from "../api/reports";

const Reports = () => {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        const fetchReports = async () => {
            const data = await getReports();
            setReports(data);
        };
        fetchReports();
    }, []);

    return (
        <Container>
            <Typography variant="h4">Reportes Logísticos</Typography>
            {reports.map((report, index) => (
                <Typography key={index}>{report.metric}</Typography>
            ))}
        </Container>
    );
};

export default Reports;
