import { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components of Chart.js
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);



export default function LineChartExample() {
   // Mocked stock price data
   const stockPrices = [
    { date: "2023-10-01", price: 145 },
    { date: "2023-10-02", price: 148 },
    { date: "2023-10-03", price: 143 },
    { date: "2023-10-04", price: 150 },
    { date: "2023-10-05", price: 155 },
    { date: "2023-10-06", price: 160 },
    { date: "2023-10-07", price: 162 },
    { date: "2023-10-08", price: 158 },
    { date: "2023-10-09", price: 164 },
    { date: "2023-10-10", price: 170 }
];

// Set data for the chart
const [stockData, setStockData] = useState({
    labels: stockPrices.map(data => data.date), // X-axis (dates)
    datasets: [
        {
            label: 'Stock Price ($)',
            data: stockPrices.map(data => data.price), // Y-axis (prices)
            fill: false,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2,
            pointRadius: 3,
            pointBackgroundColor: 'rgba(54, 162, 235, 1)',
            tension: 0.1 // Smoothness of the line
        }
    ]
});

// Set options for the chart
const [stockOptions, setStockOptions] = useState({
    responsive: true,
    maintainAspectRatio: false,  
    plugins: {
        title: {
            display: true,
            text: 'Stock Price Over Time',
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
        x: {
            title: {
                display: false
            }
        },
        y: {
            beginAtZero: false,
            title: {
                display: false
            }
        }
    }
});

// Render the chart
return (
    <div   style={{
        width: "80%",
        height:"450px", 
        maxWidth: "800px",
        margin: "0 auto",
        marginTop:"40px",
        padding: "10px",
        backgroundColor: "#f9f9f9",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
    }} className="StockChartExample">

        <Line style={{
            width: "100%",    // Full width for the canvas
            height: "100%"    // Dynamic height
          }} data={stockData} options={stockOptions}
        />

    </div>
);
}