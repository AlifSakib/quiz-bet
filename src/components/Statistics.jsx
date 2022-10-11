import React, { useContext } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
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
      <ResponsiveContainer width="100%" height="60%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Line
            type="monotone"
            dataKey="total"
            stroke="#E94560"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
          <CartesianGrid stroke="#645CAA" strokeDasharray="6 6" />
          <Tooltip></Tooltip>
          <XAxis dataKey="name" />
          <YAxis />
          <Legend></Legend>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
