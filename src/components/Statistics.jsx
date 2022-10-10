import React, { useContext } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { quizContext } from "./Root";

const Statistics = () => {
  const quizData = useContext(quizContext);
  const data = quizData.data;
  const total = data.total;
  const name = data.name;
  console.log(data);
  return (
    <div className="w-9/12 mx-auto flex justify-center items-center h-screen flex-col">
      <div>
        <h1 className="mb-10 text-2xl font-bold font-poppins">Line Chart</h1>
      </div>
      <LineChart width={600} height={400} data={data}>
        <Line
          type="monotone"
          dataKey="total"
          stroke="#E94560"
          strokeWidth={2}
        />
        <CartesianGrid stroke="#645CAA" strokeDasharray="5 5" />
        <Tooltip></Tooltip>
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </div>
  );
};

export default Statistics;
