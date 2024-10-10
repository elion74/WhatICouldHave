import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components of Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function BarExample() {
    // set data
    const [barData, setBarData] = useState({
        labels: ['label 1', 'label 2', 'label 3', 'label 4'],
        datasets: [
            {
                label: 'test label',
                data: [48, 35, 73, 82],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 2
            }
        ]
    });

    // set options
    const [barOptions, setBarOptions] = useState({
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Data Organized In Bars',
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
        <div className="BarExample">
            <Bar data={barData} options={barOptions} />
        </div>
    );
}