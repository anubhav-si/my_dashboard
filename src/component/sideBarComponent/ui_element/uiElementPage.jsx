import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
} from "recharts";


const dataA = [
  { v: 40 }, { v: 20 }, { v: 30 }, { v: 10 }, { v: 25 }, { v: 18 }, { v: 15 }
];

const dataB = [
  { v1: 15, v2: 8 },
  { v1: 25, v2: 10 },
  { v1: 18, v2: 12 },
  { v1: 30, v2: 15 },
  { v1: 22, v2: 14 },
];

const dataC = [
  { b: 10, o: 20 },
  { b: 20, o: 25 },
  { b: 15, o: 18 },
  { b: 30, o: 35 },
  { b: 22, o: 28 },
];

const dataD = [
  { p1: 12, p2: 18 },
  { p1: 18, p2: 22 },
  { p1: 10, p2: 14 },
  { p1: 22, p2: 26 },
  { p1: 16, p2: 20 },
];
const barData = [
  { name: "A", value: 40 },
  { name: "B", value: 30 },
  { name: "C", value: 20 },
  { name: "D", value: 27 },
  { name: "E", value: 18 },
  { name: "F", value: 23 },
];

const pieData = [
  { name: "A", value: 25 },
  { name: "B", value: 75 },
];

const donutData = [
  { name: "A", value: 60 },
  { name: "B", value: 40 },
];

const COLORS = ["#3b82f6", "#a855f7", "#fb923c", "#0ea5e9"];
const  UIElementsPage = () => {
  return (
    <div className="mx-10 mb-8 min-h-screen">
      

      {/* Filter Section */}
      <div className="flex justify-between  items-center  mb-6">
        <h1 className="text-3xl font-bold ">UI Elements</h1>
        <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border">
          <button className="px-3 py-1 border rounded-lg text-sm flex items-center gap-2 hover:bg-gray-100">
            <span>Filter By</span>
          </button>

          <select className="px-3 py-1 border rounded-lg text-sm outline-none hover:bg-gray-100 cursor-pointer">
            <option>Charts</option>
            <option>Inputs</option>
            <option>Cards</option>
          </select>
        </div>
      </div>

      {/* ================= BAR CHART ================= */}
       <div className="bg-white p-6 my-6 border rounded-xl">
            <h2 className="text-lg font-semibold mb-4">Bar Chart</h2>

            <div className="grid grid-cols-4 gap-6">

                {/* 1️⃣ Simple Solid Bars (left one in screenshot) */}
                <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={dataA}>
                    <Bar dataKey="v" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
                </div>

                {/* 2️⃣ Pastel Transparent Bars (2nd from screenshot) */}
                <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={dataB}>
                    <Bar dataKey="v1" fill="#bae6fd" radius={[4, 4, 0, 0]} barSize={14} />
                    <Bar dataKey="v2" fill="#e0f2fe" radius={[4, 4, 0, 0]} barSize={14} />
                    </BarChart>
                </ResponsiveContainer>
                </div>

                {/* 3️⃣ Grouped Bars (Blue + Orange) (3rd in screenshot) */}
                <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={dataC}>
                    <Bar dataKey="b" fill="#2563eb" radius={[4, 4, 0, 0]} barSize={14} />
                    <Bar dataKey="o" fill="#f59e0b" radius={[4, 4, 0, 0]} barSize={14} />
                    </BarChart>
                </ResponsiveContainer>
                </div>

                {/* 4️⃣ Stacked Faded Pink Bars (4th in screenshot) */}
                <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={dataD}>
                    <Bar dataKey="p1" fill="#f9a8d4" radius={[4, 4, 0, 0]} barSize={14} />
                    <Bar dataKey="p2" fill="#fce7f3" radius={[4, 4, 0, 0]} barSize={14} />
                    </BarChart>
                </ResponsiveContainer>
                </div>

                </div>
            </div>
      {/* ================= PIE CHART ================= */}
      <div className="bg-white p-6 rounded-xl shadow-sm border mb-6">
        <h2 className="text-lg font-semibold mb-4">Pie Chart</h2>

        <div className="grid grid-cols-4 gap-6">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-full flex justify-center"
            >
              <PieChart width={130} height={130}>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={0}
                  outerRadius={55}
                  dataKey="value"
                >
                  <Cell fill={COLORS[i]} />
                  <Cell fill="#e8eefc" />
                </Pie>
              </PieChart>
            </div>
          ))}
        </div>
      </div>

      {/* ================= DONUT CHART ================= */}
      <div className="bg-white p-6 rounded-xl shadow-sm border mb-6">
        <h2 className="text-lg font-semibold mb-4">Donut Chart</h2>

        <div className="grid grid-cols-4 gap-6">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex justify-center">
              <PieChart width={140} height={140}>
                <Pie
                  data={donutData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={60}
                  paddingAngle={5}
                  dataKey="value"
                >
                  <Cell fill={COLORS[i]} />
                  <Cell fill="#e8eefc" />
                </Pie>
              </PieChart>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default UIElementsPage;
