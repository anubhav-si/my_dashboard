import React from "react";
import {data1} from "../utils/dataForDashboardChart";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";



const SalesAnalyticsCard = () => {
  return (
    <div className="bg-white w-[390px] p-6 rounded-2xl shadow-md">
      <h2 className="text-lg font-semibold mb-4">Sales Analytics</h2>

      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data1}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.5} vertical={false}/>
            <XAxis dataKey="year"
                axisLine={false}
                tickLine={false} />
            <YAxis 
                axisLine={false}
                tickLine={false}  />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="a"
              stroke="#0099FF"
              strokeWidth={3}
            />

            <Line
              type="monotone"
              dataKey="b"
              stroke="#00D27F"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesAnalyticsCard;
