import React, { useState } from "react";
import { ImagePlus, X } from "lucide-react";

const AddProductImageCard = ({ onImageSelect }) => {
    const [imgFile,setImageFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleChangeImg = (e)=> {
        const file = e.target.files[0];
        if (!file) return console.log("file not found");
    

        const imageUrl = URL.createObjectURL(file);
        setPreview(imageUrl);

        if(onImageSelect) onImageSelect(file);
      

    }
    const removeImg = () =>{
        setPreview(null);
    };
 
 
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const imageUrl = URL.createObjectURL(file);
//     setPreview(imageUrl);

//     // send file to parent (for backend later)
//     if (onImageSelect) {
//       onImageSelect(file);
//     }
//   };

//   const removeImage = () => {
//     setPreview(null);
//   };

  return (
    <div className="w-[300px] h-[240px] rounded-2xl border-2 border-dashed border-blue-300 bg-blue-50 flex items-center justify-center relative overflow-hidden shadow-sm hover:shadow-md transition">

      {!preview ? (
        <label className="flex flex-col items-center justify-center cursor-pointer text-blue-500">
          <ImagePlus size={40} />
          <span className="mt-2 text-sm font-medium">
            Upload product image
          </span>
          <span className="text-xs text-gray-500 mt-1">
            JPG, PNG (max 5MB)
          </span>

          <input
            type="file"
            accept="image/*"
            onChange={handleChangeImg}
            className="hidden"
          />
        </label>
      ) : (
        <>
          <img
            src={preview}
            alt="Product Preview"
            className="w-full h-full object-contain bg-white"
          />

          <button
            onClick={removeImg}
            className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:bg-red-50"
          >
            <X size={16} className="text-red-500" />
          </button>
        </>
      )}
    </div>
  );
};

export default AddProductImageCard;
