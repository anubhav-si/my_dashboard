import React, { useState ,useEffect } from 'react'
import OrderStatusCom from './components/orderStatusCom';
import DateFilterDropdown from './components/dateFilterComp';
import { orders } from './utils/data';
import { format } from 'date-fns';
import OrdertypeFilterDropdown from './components/orderTypeFilter';
import OrderStatusFilterDropdown from './components/orderStatusFilter';

const Order_ListPage = () => {
    const filterItems = ["Date","Order Type","Order Status"];
    const [active,setActive] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedtype,setSelectedtype] = useState([]);
    const [finalorder,setfinalorder] = useState(orders);
    const [selectedstatus, setSelectedstatus] = useState([]);
    console.log(selectedstatus);
    
    useEffect(()=>{
       const filtered = orders.filter((o) => {
      
        const matchType =
          selectedtype.length === 0 ? true : selectedtype.includes(o.type);

        const matchDate =
          selectedDate === "" ? true : new Date(o.date) >= new Date(selectedDate);
        
        const matchStatus = 
          selectedstatus.length === 0 ? true : selectedstatus.includes(o.status); 
          // console.log(matchStatus);
          
        return matchType && matchDate && matchStatus;
    });

  setfinalorder(filtered);
  
  },[selectedDate,selectedtype,selectedstatus]);
    

    
  
   
  return (
        <div className="mx-10 min-h-screen ">
      
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6">Order Lists</h1>

        <div className='bg-white rounded-2xl'>
            {/* Filter Bar */}
        <div className="flex items-center gap-4 bg-white  p-4 rounded-xl shadow-sm mb-6">
        <button  className="p-2 rounded-lg border">
          <i className="fa-solid fa-filter"></i>
        </button>

        <button className="flex items-center gap-2 border py-2 px-4 rounded-lg">
          Filter By
        </button>
        {filterItems.map((i)=>{
          const isdate = (i === "Date" && selectedDate !== "");
          const istype = (i === "Order Type" && selectedtype.length > 0);
          const isstatus = (i === "Order Status" && selectedstatus.length > 0);
          const isActiveFilter = active === i || isdate || istype || isstatus ;
         return (
            <button onClick={()=>setActive(i) }
            key={i}
             className={`flex items-center gap-2 border py-2 px-4 rounded-lg
             ${isActiveFilter ? "bg-blue-600 text-white" : "text-black hover:bg-blue-100"}`}>
            {isdate && selectedDate ? format(selectedDate,"dd MMM yyy") : i} <span>▼</span>
            </button>
          )
        })}
           
        
        <button onClick={()=> {
          setfinalorder(orders); 
          setSelectedDate("");
          setSelectedtype("");
          setSelectedstatus("");
        }} 
        className={`flex items-center gap-1 text-red-500 border rounded-lg py-2 px-4 ml-auto
        ${selectedDate !== "" || selectedtype.length > 0 || selectedstatus.length > 0 ? " bg-red-500 text-white": "bg-white" }`}>
        <i className="fa-solid fa-rotate-left "></i> Reset Filter
        </button>
      </div>
      {active === "Date" && (
            <div className="relative">
              <DateFilterDropdown
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                onApply={() => setActive("")} // close after apply
              />
            </div>
          )}
        {active === "Order Type" && (
          <div className='relative'>
            <OrdertypeFilterDropdown
            selectedtype={selectedtype}
            setSelectedtype={setSelectedtype}
            onApply={()=>setActive('')}/>

          </div>
        )}
        {active === "Order Status" && (
            <div className='relative'>
              <OrderStatusFilterDropdown
              selectedstatus={selectedstatus}
              setSelectedstatus={setSelectedstatus}
              onApply={()=>setActive('')}/>
            </div>
          )}
      {/* Table */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100 text-gray-600 text-sm uppercase">
            <tr>
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Address</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Type</th>
              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {finalorder.map((o) => (
              <tr key={o.id} className="border-b hover:bg-gray-50">
                <td className="p-4">{o.id}</td>
                <td className="p-4">{o.name}</td>
                <td className="p-4">{o.address}</td>
                <td className="p-4">{o.date}</td>
                <td className="p-4">{o.type}</td>
                <td className="p-4">
                  <OrderStatusCom status={o.status} />
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
        </div>
    </div>
  )
}

export default Order_ListPage;