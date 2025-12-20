import React ,{useState,useEffect} from 'react'


const Prod_co_mainP = () => {
const [product , setproduct] = useState([]);
const productApiData = async () =>{
   const  data =  await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    setproduct(json);
}
  useEffect(() => {
         productApiData()
    },[]
    );
  return (
    
            
            <div className="bg-white rounded-2xl mx-9 shadow p-6 mt-6 w-[95%]">
                <div className="flex justify-between items-center mb-4">
                    <h2 className='font-bold text-2xl'>Deals Details</h2>
                    <select className="border px-3 py-1 rounded-lg text-gray-600">
                    <option>October</option>
                    <option>September</option>
                    <option>August</option>
                    </select>
                </div>

                    <table className="w-full text-left">
                        <thead>
                        <tr className="text-gray-500 text-sm border-b">
                            <th className="pb-3">Product Name</th>
                            <th className="pb-3">Category</th>
                            <th className="pb-3">Rating</th>
                            <th className="pb-3">R.count</th>
                            <th className="pb-3">Price</th>
                            <th className="pb-3">Status</th>
                        </tr>
                        </thead>

                        <tbody>
                        {product.map((item) => (
                            <tr key={item.id} className="border-b last:border-none text-sm">
                            <td className="py-4 flex items-center gap-3">
                                <img
                                src={item.image || "no"}
                                className="h-10 w-10 rounded-lg object-cover"
                                />
                                <span className="font-medium">{item.title || "00"}</span>
                            </td>

                            <td className="text-gray-600">{item.category || "00"}</td>

                            <td className="text-gray-600">{item.rating.rate || "00"}</td>

                            <td className="text-gray-600">{item.rating.count|| "00"}</td>

                            <td className="font-medium">${item.price || "00"}</td>

                            <td>
                                <span
                                className={`px-3 py-1 text-xs rounded-full font-medium ${
                                    item.status === "Delivered"
                                    ? "bg-green-100 text-green-600"
                                    : item.status === "Pending"
                                    ? "bg-yellow-100 text-yellow-600"
                                    : "bg-red-100 text-red-600"
                                }`}
                                >
                                {item.status}
                                </span>
                            </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
            </div>
  

  );
}

export default Prod_co_mainP