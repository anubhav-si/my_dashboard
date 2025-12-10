import React from 'react';
// import salesData from './dataForMainPageChart';
import {LineChart,Line,ResponsiveContainer, XAxis, YAxis, Tooltip,CartesianGrid, AreaChart} from "recharts";

const ChartComponent = ({data}) => {
  console.log(data);
  
  return (
    <div className=' bg-white w-90% m-8 rounded-2xl'>
      <div className='flex items-center justify-between p-5 '>
        <h1 className='font-bold text-2xl'>Sales details</h1>
       <select className="border px-3 py-1 rounded-lg text-gray-600">
                    <option>October</option>
                    <option>September</option>
                    <option>August</option>
                    </select>
      </div>
      <div className='h-[300px] w-90% p-8 pt-0 ' >
        <ResponsiveContainer>
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