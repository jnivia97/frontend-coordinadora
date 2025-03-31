import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import TrackingCard from "../components/TrackingCard";
import { getTrackingInfo } from "../api/tracking";

const Tracking = () => {
    const [trackingData, setTrackingData] = useState([]);

    useEffect(() => {
        const fetchTrackingData = async () => {
            const data = await getTrackingInfo();
            setTrackingData(data);
        };
        fetchTrackingData();
    }, []);

    return (
        <Container>
            <Typography variant="h4">Seguimiento de Envíos</Typography>
            {trackingData.map((trackingInfo) => (
                <TrackingCard key={trackingInfo.id_orden} trackingInfo={trackingInfo} />
            ))}
        </Container>
    );
};

export default Tracking;
