"use client";
import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export const UserData = [
  {
    id: 1,
    month: "Jan",
    userGain: 100,
    userLost: 823,
  },
  {
    id: 2,
    month: "Feb",
    userGain: 200,
    userLost: 345,
  },
  {
    id: 3,
    month: "March",
    userGain: 300,
    userLost: 555,
  },
  {
    id: 4,
    month: "Aprl",
    userGain: 400,
    userLost: 4555,
  },
  {
    id: 5,
    month: "May",
    userGain: 300,
    userLost: 234,
  },
  {
    id: 6,
    month: "June",
    userGain: 200,
    userLost: 234,
  },
  {
    id: 7,
    month: "July",
    userGain: 500,
    userLost: 234,
  },
  {
    id: 8,
    month: "Oct",
    userGain: 300,
    userLost: 234,
  },
  {
    id: 9,
    month: "Sept",
    userGain: 500,
    userLost: 234,
  },
  {
    id: 10,
    month: "Nov",
    userGain: 400,
    userLost: 234,
  },
  {
    id: 11,
    month: "Dec",
    userGain: 600,
    userLost: 234,
  },
  {
    id: 12,
    month: "Dec",
    userGain: 450,
    userLost: 234,
  },
];
const options = {
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        display: true,
        history: true,
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
      border: {
        display: false,
      },
    },
  },
};

const SalesChart = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [
      {
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "#E5E6FD",
          "#E5E6FD",
          "#E5E6FD",
          "#E5E6FD",
          "#E5E6FD",
          "#E5E6FD",
          "#E5E6FD",
          "#E5E6FD",
          "#5E52F2",
        ],
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 5,
      },
    ],
  });
  return (
    <div className="w-full mt-6">
      <Bar data={userData} options={options} className="w-full" />
    </div>
  );
};

export default SalesChart;