import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels"; // Import plugin datalabels
import 'tailwindcss/tailwind.css';

// Register plugins
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieChart = () => {
  const data = {
    labels: ["Male", "Female", "Other"],
    datasets: [
      {
        label: "Buyer Profile",
        data: [39, 45, 15],
        backgroundColor: ["#2dd4bf", "#fbbf24", "#f97316"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#374151", // dark text color
        },
      },
      datalabels: {
        color: "#fff", // Warna teks di dalam pie
        formatter: (value, context) => {
          // Menampilkan nilai dengan tanda % (persentase)
          let total = context.chart._metasets[0].total;
          let percentage = ((value / total) * 100).toFixed(1);
          return `${percentage}%`; // Format angka jadi persentase
        },
        font: {
          weight: "bold",
          size: 16,
        },
      },
    },
    animation: {
      animateScale: true, // Animasi zoom in
      animateRotate: true, // Animasi rotasi
    },
  };

  return (
    <div className="w-full flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">Buyer Profile</h2>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default PieChart;
