import React from "react";

const invoiceData = [
  { id: 1, description: "Children Toy", qty: 2, base: 20 },
  { id: 2, description: "Makeup", qty: 2, base: 50 },
  { id: 3, description: "Asus Laptop", qty: 5, base: 100 },
  { id: 4, description: "Iphone X", qty: 4, base: 1000 },
];

const InvoicePage = () => {
  const total = invoiceData.reduce((sum, item) => sum + item.qty * item.base, 0);

  return (
    <div className="mx-10">
      <h1 className="text-3xl font-extrabold mb-6">Invoice</h1>

      <div className="bg-white shadow-md rounded-2xl p-10">

        {/* Top Section */}
        <div className="grid grid-cols-3 gap-10 mb-10 text-sm">
          <div>
            <p className="font-semibold">Invoice From :</p>
            <p className="mt-2 font-bold">Virginia Walker</p>
            <p className="text-gray-500 text-sm">9694 Krajcik Locks Suite 635</p>
          </div>

          <div>
            <p className="font-semibold">Invoice To :</p>
            <p className="mt-2 font-bold">Austin Miller</p>
            <p className="text-gray-500 text-sm">Brookview</p>
          </div>

          <div>
            <p className="font-semibold">Invoice Date : <span className="font-normal">12 Nov 2019</span></p>
            <p className="font-semibold mt-2">Due Date : <span className="font-normal">25 Dec 2019</span></p>
          </div>
        </div>

        {/* Table */}
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-600 text-sm">
            <tr>
              <th className="py-3 px-4">Serial No.</th>
              <th className="py-3 px-4">Description</th>
              <th className="py-3 px-4">Quantity</th>
              <th className="py-3 px-4">Base Cost</th>
              <th className="py-3 px-4">Total Cost</th>
            </tr>
          </thead>

          <tbody>
            {invoiceData.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="py-4 px-4">{item.id}</td>
                <td className="py-4 px-4">{item.description}</td>
                <td className="py-4 px-4">{item.qty}</td>
                <td className="py-4 px-4">${item.base}</td>
                <td className="py-4 px-4 font-semibold">
                  ${item.qty * item.base}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Total Section */}
        <div className="flex justify-end mt-5 text-lg font-bold">
          Total = <span className="text-blue-600 ml-2">${total}</span>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-8">
          <button className="p-3 border rounded-lg hover:bg-gray-100 transition">
            🖨
          </button>

          <button className="px-5 py-3 bg-blue-600 text-white rounded-lg flex items-center gap-2 hover:bg-blue-700 transition">
            Send ✈️
          </button>
        </div>

      </div>
    </div>
  );
};

export default InvoicePage;
