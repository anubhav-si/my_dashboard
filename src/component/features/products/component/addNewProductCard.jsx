import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AddProductImageCard from "./AddProductImageCard";

const AddNewProductCard = ({ isopen, setisOpen, setResponseMessage }) => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",   // ✅ added
    image: null,
  });

  const handleChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageSelect = (file) => {
    setProductData({ ...productData, image: file });
  };

  const handleSubmit = async () => {
    try {
      const { name, description, price, category, image } = productData;

      if (!name || !description || !price || !category || !image) {
        throw new Error("All fields are required");
      }

      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category); // ✅ added
      formData.append("image", image);

      const res = await fetch("http://localhost:3001/product/addproduct", {
        method: "POST",
        body: formData,
        credentials: "include",
      });

      const response = await res.json();

      if (!response.success) {
        throw new Error(response.message);
      }

      setisOpen(!isopen);
      setResponseMessage(response.message);
    } catch (err) {
      setResponseMessage(err.message);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg">
      {/* Image Section */}
      <div className="relative flex items-center justify-center">
        <button className="absolute left-0 bg-white shadow p-2 rounded-full">
          <ChevronLeft size={18} />
        </button>

        <AddProductImageCard onImageSelect={handleImageSelect} />

        <button className="absolute right-0 bg-white shadow p-2 rounded-full">
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="space-y-4 mt-4">
        {/* Product Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            placeholder="Apple Watch Series 8"
            className="w-full rounded-xl border px-4 py-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            name="category"
            value={productData.category}
            onChange={handleChange}
            className="w-full rounded-xl border px-4 py-2 focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Category</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home</option>
            <option value="beauty">Beauty</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Price
          </label>
          <div className="relative">
            <span className="absolute left-3 top-2.5 text-gray-500">₹</span>
            <input
              type="number"
              name="price"
              value={productData.price}
              onChange={handleChange}
              placeholder="9999"
              className="w-full rounded-xl border pl-8 pr-4 py-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleChange}
            rows="3"
            placeholder="Short product description..."
            className="w-full rounded-xl border px-4 py-2 resize-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleSubmit}
          className="mt-5 w-6/12 bg-blue-500 hover:bg-blue-600 py-2 rounded-xl text-white"
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddNewProductCard;
