import { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components of Chart.js
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

export default function LineChartExample() {
    // set data
    const [lineData, setLineData] = useState({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Sample Data',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: true,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                tension: 0.1 // Smoothness of the line
            }
        ]
    });

    // set options
    const [lineOptions, setLineOptions] = useState({
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Line Chart Example',
                font: {
                    size: 25
                }
            },
            legend: {
                display: true,
                position: 'top'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    });

    // return JSX
    return (
        <div className="LineChartExample">
            <Line data={lineData} options={lineOptions} />
        </div>
    );
}