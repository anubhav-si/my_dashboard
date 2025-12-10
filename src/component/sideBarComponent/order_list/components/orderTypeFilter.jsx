import { useState } from "react";
import { Calendar } from "react-date-range";
import { format } from "date-fns";

const OrdertypeFilterDropdown = ({ selectedtype, setSelectedtype, onApply }) => {
  const [open, setOpen] = useState(true);
  const [isactive,setisactive] = useState([]);
  const types = ["Medicine","Book","Electric","Watch","Mobile","Other",];
   const toggleType = (t) => {
        if (selectedtype.includes(t)) {
          // remove
          setSelectedtype(selectedtype.filter((x) => x !== t));
        } else {
          // add
          setSelectedtype([...selectedtype, t]);
        }
      };


  return (
    <div className="relative left-42">
    
      {/* DROPDOWN */}
      {open && (
        <div className="absolute z-50 mt-2 bg-white p-4 rounded-xl shadow-xl w-[320px] animate-fadeIn">
          <div className="flex flex-wrap justify-center items-center gap-3 ">
               {types.map((t)=> <h3 key={t} onClick={()=> toggleType(t)} 
                className={`border rounded-2xl w-auto py-2 px-3 
                ${selectedtype.includes(t) ? "bg-blue-600 text-white" : "bg-white text-black hover:bg-blue-200"}`} >{t}</h3>)}
          </div>
          {/* Apply button */}
          <button
            onClick={() => {    
              onApply();
              setOpen(false);
            }}
            className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
          >
            Apply Now
          </button>
        </div>
      )}
    </div>
  );
};

export default OrdertypeFilterDropdown;
