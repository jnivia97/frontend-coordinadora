import { Card, CardContent, Typography, Chip, LinearProgress } from "@mui/material";

const TrackingCard = ({ trackingInfo }) => {
    const getStatusColor = (status) => {
        switch (status) {
            case "En espera":
                return "warning";
            case "En tránsito":
                return "primary";
            case "Entregado":
                return "success";
            default:
                return "default";
        }
    };

    const getProgressValue = (status) => {
        switch (status) {
            case "En espera":
                return 30;
            case "En tránsito":
                return 70;
            case "Entregado":
                return 100;
            default:
                return 0;
        }
    };

    return (
        <Card>
            <CardContent>
                <Typography variant="h6">Orden ID: {trackingInfo.id_orden}</Typography>
                <Typography variant="body2">Destino: {trackingInfo.direccion_destino}</Typography>
                <Typography variant="body2">Última actualización: {trackingInfo.fecha_actualizacion}</Typography>

                <Chip label={trackingInfo.estado} color={getStatusColor(trackingInfo.estado)} sx={{ mt: 1 }} />

                <LinearProgress variant="determinate" value={getProgressValue(trackingInfo.estado)} sx={{ mt: 2 }} />
            </CardContent>
        </Card>
    );
};

export default TrackingCard;
