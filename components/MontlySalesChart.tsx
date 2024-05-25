"use client";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler,
  BarElement,
} from "chart.js";
import { MenuItem, TextField, Typography } from "@mui/material";
import { useState } from "react";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  Legend,
  Tooltip,
  Filler
);

const salesData = [
  { month: 1, sales: 100 },
  { month: 2, sales: 250 },
  { month: 3, sales: 300 },
  { month: 4, sales: 400 },
  { month: 5, sales: 300 },
  { month: 6, sales: 400 },
  { month: 7, sales: 500 },
  { month: 8, sales: 400 },
  { month: 9, sales: 600 },
  { month: 10, sales: 700 },
  { month: 11, sales: 650 },
  { month: 12, sales: 700 },
];
const data = {
  labels: salesData.map((data) => data.month),
  datasets: [
    {
      label: "",
      data: salesData.map((data) => data.sales),
      borderColor: "black",
      borderWidth: 3,
      pointBorderColor: "transparent",
      pointBackgroundColor: "transparent",
      pointBorderWidth: 0,
      tension: 0.5,
      fill: true,
      //@ts-ignore
      backgroundColor: (context) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, "#D3DDFF");
        gradient.addColorStop(1, "#D3DDFF");
        return gradient;
      },
    },
  ],
};

const options = {
  plugins: {
    legend: false,
  },
  responsive: true,
  scales: {
    y: {
      ticks: {
        font: {
          size: 17,
          weight: "bold",
        },
        display: false,
      },
      title: {
        display: false,
        text: "Sales",
        padding: {
          bottom: 10,
        },
        font: {
          size: 30,
          style: "italic",
          family: "Arial",
        },
      },
      min: 50,
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
    },
    x: {
      ticks: {
        font: {
          size: 17,
          weight: "bold",
        },
      },
      title: {
        display: false,
        text: "Month",
        padding: {
          top: 10,
        },
        font: {
          size: 30,
          style: "italic",
          family: "Arial",
        },
      },
      grid: {
        display: false,
      },
    },
  },
};
function MontlySalesChart() {
  const [selected, setSelected] = useState("jan");
  return (
    <div className="bg-[#E0E8FF] shadow-2xl p-2 rounded-lg w-full relative">
      <div className=" absolute left-2 top-[30%] bottom-1/2">
        <p className="text-slate-400 text-[14px]">Total Sales</p>
        <div className="flex items-center gap-1">
          <h3 className="text-[#241A33] font-bold">
            ${salesData.reduce((a, b) => a + b.sales, 0)}
          </h3>
          <p className="px-4 py-2 rounded-lg bg-green-500 text-[12px]">+20%</p>
        </div>
      </div>
      <div className="flex justify-between items-center my-2">
        <Typography>Monthly Sales</Typography>
        <TextField
          select
          size="small"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          <MenuItem value="jan">January</MenuItem>
          <MenuItem value="feb">February</MenuItem>
          <MenuItem value="march">March</MenuItem>
          <MenuItem value="ap">April</MenuItem>
        </TextField>
      </div>
      {
        //@ts-ignore
        <Line data={data} options={options} className="w-full"></Line>
      }
    </div>
  );
}

// export default MontlySalesChart;
export default MontlySalesChart;