import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components of Chart.js
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);



export default function LineChart({dataset}:any) {
 
     // Transform the dataset into labels and data for the chart
  const labels = dataset.map((data: any) => data.date);
  const prices = dataset.map((data: any) => data.price);


// Set data for the chart
const [stockData, setStockData] = useState({
    labels: labels, // X-axis (dates)
    datasets: [
        {
            label: 'Stock Price ($)',
            data: prices, // Y-axis (prices)
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


useEffect(() => {
    setStockData({
      labels: dataset.map((data: any) => data.date),
      datasets: [
        {
          label: 'Stock Price ($)',
          data: dataset.map((data: any) => data.price),
          fill: false,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 2,
          pointRadius: 3,
          pointBackgroundColor: 'rgba(54, 162, 235, 1)',
          tension: 0.1,
        },
      ],
    });
  }, [dataset]);


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