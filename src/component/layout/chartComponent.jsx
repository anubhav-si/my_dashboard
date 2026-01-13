import React from 'react';
// import salesData from './dataForMainPageChart';
import {LineChart,Line,ResponsiveContainer, XAxis, YAxis, Tooltip,CartesianGrid, AreaChart} from "recharts";

const ChartComponent = ({data}) => {
 
  
  return (
    <div className=' bg-white w-full md:w-[95%] mx-auto my-4 md:m-10 rounded-2xl shadow-2xl'>
      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 md:p-5'>
        <h1 className='font-bold text-lg sm:text-xl md:text-2xl'>Sales details</h1>
       <select className="border px-3 py-1 rounded-lg text-gray-600 w-full sm:w-auto">
                    <option>October</option>
                    <option>September</option>
                    <option>August</option>
                    </select>
      </div>
      <div className='h-[220px] sm:h-[260px] md:h-[300px] w-full px-2 md:px-4' >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false}/>

            <XAxis 
            dataKey="date"
            axisLine={false}
            tickLine={false}/>
            <YAxis
            axisLine={false}
            tickLine={false}/>
            <Tooltip/>
             <Line
                type="monotone"
                dataKey="sales"
                stroke="#2563eb"
                strokeWidth={2}
                activeDot={{ r: 6 }}
              />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ChartComponent