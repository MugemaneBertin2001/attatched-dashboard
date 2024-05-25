"use client";
import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const data = {
  labels: ["January", "February"],
  datasets: [
    {
      label: "10%",
      data: [5, 4],
      backgroundColor: "#6251FC",
    },
    {
      label: "20%",
      data: [5, 4],
      backgroundColor: "#8174FF",
    },
    {
      label: "40%",
      data: [5, 4],
      backgroundColor: "#988DFF",
    },
    {
      label: "60%",
      data: [5, 3],
      backgroundColor: "#B4AAFF",
    },
    {
      label: "80%",
      data: [10, 8],
      backgroundColor: "#E0DDFF",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      display: false,
    },
    tooltip: {
      mode: "index",
      intersect: false,
    },
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const OrderListChart = () => {
  return (
    <div className="w-full">
      {
        //@ts-ignore
        <Bar data={data} options={options} className="w-full" />
      }
    </div>
  );
};

export default OrderListChart;