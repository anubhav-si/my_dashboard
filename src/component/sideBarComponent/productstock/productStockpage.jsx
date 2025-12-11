import React ,{useEffect,useState}from "react";
import { Edit, Trash2 } from "lucide-react";
import { products } from "./utils/productdata";
import { use } from "react";




const ProductListpage = () => {
    const [serchstock,setserchstock] = useState("");
    const [customstock , setcustomstock] = useState(products);
    const serchHandler = ()=>{
        const updatedstock = products.filter((p)=>p.name.toLocaleLowerCase().includes(serchstock.toLocaleLowerCase()));
        setcustomstock(updatedstock);
    }
    useEffect(()=>{
        serchHandler();
    },[serchstock]);

  return (
    <div className="mx-10 min-h-screen  ">
      {/* Page Title */}
     
      {/* Search */}
      <div className="w-full  sticky top-0 z-30 flex justify-between items-center  mb-10">
        <h2 className="text-3xl font-extrabold  items-center">Product Stock</h2>

        <div className="bg-white shadow rounded-full flex  px-4 py-2 mr-10 w-72">
                <input
                    type="text"
                    value={serchstock}
                    placeholder="Search product name"
                    className="outline-none text-sm w-full"
                    onChange={(e)=> setserchstock(e.target.value)}
                />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white shadow-md rounded-xl overflow-y-auto max-h-screen">
        <table className="w-full text-left ">
          <thead className="bg-gray-100 text-gray-600 sticky top-0  z-20 text-sm">
            <tr>
              <th className="py-3 px-4">Image</th>
              <th className="py-3 px-4">Product Name</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">Piece</th>
              <th className="py-3 px-4">Available Color</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {customstock.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-50 transition"
              >
                {/* Image */}
                <td className="py-4 px-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-md object-cover"
                  />
                </td>

                {/* Name */}
                <td className="py-4 px-4 font-medium">{item.name}</td>

                {/* Category */}
                <td className="py-4 px-4 text-gray-500">{item.category}</td>

                {/* Price */}
                <td className="py-4 px-4 font-semibold">{item.price}</td>

                {/* Piece */}
                <td className="py-4 px-4">{item.piece}</td>

                {/* Colors */}
                <td className="py-4 px-4">
                  <div className="flex gap-2">
                    {item.colors.map((color, index) => (
                      <span
                        key={index}
                        className="w-4 h-4 rounded-full border"
                        style={{ backgroundColor: color }}
                      ></span>
                    ))}
                  </div>
                </td>

                {/* Actions */}
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <button className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition">
                      <Edit size={16} />
                    </button>
                    <button className="p-2 bg-gray-100 rounded-md hover:bg-red-100 transition text-red-500">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductListpage;
