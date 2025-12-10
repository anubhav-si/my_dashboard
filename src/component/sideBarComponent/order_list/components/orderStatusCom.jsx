import React from 'react'

const OrderStatusCom = ({ status }) => {
    const statusColors = {
  Completed: "bg-emerald-100 text-emerald-600",
  Processing: "bg-purple-100 text-purple-600",
  Rejected: "bg-red-100 text-red-600",
  "On Hold": "bg-orange-100 text-orange-600",
  "In Transit": "bg-pink-100 text-pink-600",
};
  return (
    <div>
         <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[status]}`}>
      {status}
    </span>
    </div>
  )
}

export default OrderStatusCom;