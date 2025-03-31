import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const TransportReport = ({ data }) => {

    const chartData = {
        labels: data.map((item) => item.transportista),
        datasets: [
            {
                label: "Total de Envios",
                data: data.map((item) => item.total_envios),
                backgroundColor: "rgba(54, 162, 235, 0.6)",
                borderColor: "rgba(54, 162, 235, 1)", 
                borderWidth: 1
            },
            {
                label: "Tiempo de Entrega",
                data: data.map((item) => item.tiempo_promedio_entrega),
                backgroundColor: "rgba(233, 180, 171, 0.6)", 
                borderColor: "rgb(241, 21, 21)",
                borderWidth: 1
            }

        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "top"
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    return <Bar data={chartData} options={options} />;
};

export default TransportReport;
