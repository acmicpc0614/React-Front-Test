import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Oct 2023", systolic: 120, diastolic: 110 },
  { month: "Nov 2023", systolic: 120, diastolic: 70 },
  { month: "Dec 2023", systolic: 160, diastolic: 110 },
  { month: "Jan 2024", systolic: 115, diastolic: 95 },
  { month: "Feb 2024", systolic: 150, diastolic: 75 },
  { month: "Mar 2024", systolic: 155, diastolic: 80 },
];

const StateCharts = () => {
  return (
    <div className="w-full h-full ">
      <h2 className="text-2xl font-bold mb-4">Blood Pressure</h2>
      <div className="flex flex-row justify-between rounded-lg h-full gap-6">
        <ResponsiveContainer className="flex-[2] h-full w-full">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" />
            <YAxis domain={[60, 180]} />
            <Tooltip content={null} /> <Legend />
            <Line
              type="monotone"
              dataKey="systolic"
              stroke="#FF69B4"
              activeDot={{ r: 5 }}
              dot={{ r: 3 }}
            />
            <Line
              type="monotone"
              dataKey="diastolic"
              stroke="#8884d8"
              activeDot={{ r: 5 }}
              dot={{ r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
        <div className="flex flex-col flex-1 h-full gap-2">
          <div>
            <span className="inline-block w-3 h-3 bg-[#FF69B4] rounded-full"></span>
            <span className="text-sm font-medium">Systolic</span>
          </div>
          <div>
            <span className=" text-lg font-bold">160</span>
          </div>
          <div>
            <span className=" text-sm text-gray-500">
              ▲ Higher than Average
            </span>
          </div>
          <hr />
          <div>
            <span className="inline-block w-3 h-3 bg-[#8884d8] rounded-full"></span>
            <span className="text-sm font-medium">Diastolic</span>
          </div>
          <div>
            <span className=" text-lg font-bold">78</span>
          </div>
          <div>
            <span className=" text-sm text-gray-500">▼ Lower than Average</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateCharts;
