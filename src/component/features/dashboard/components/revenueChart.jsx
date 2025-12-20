import React from "react";
import {revenueData} from "../utils/dataForDashboardChart";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid
} from "recharts";

const RevenueChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-[1245px] m-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Revenue</h2>

        <select className="border p-2 rounded-lg text-sm bg-gray-100">
          <option>October</option>
          <option>September</option>
          <option>August</option>
        </select>
      </div>

      {/* Chart */}
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={revenueData}>
            <defs>
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FF6A57" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#FF6A57" stopOpacity={0.05} />
              </linearGradient>

              <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#A78BFA" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#A78BFA" stopOpacity={0.05} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" opacity={0.6} vertical={false} />
            <XAxis dataKey="name" tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false} />
            <YAxis tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false} />
            <Tooltip />

            <Area
              type="monotone"
              dataKey="sales"
              stroke="#FF6A57"
              strokeWidth={3}
              fill="url(#colorSales)"
            />

            <Area
              type="monotone"
              dataKey="profit"
              stroke="#A78BFA"
              strokeWidth={3}
              fill="url(#colorProfit)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex gap-6 mt-4 text-sm items-center px-2">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#FF6A57]"></span> Sales
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#A78BFA]"></span> Profit
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;
