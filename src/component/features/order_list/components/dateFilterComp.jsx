import { useState } from "react";
import { Calendar } from "react-date-range";
import { format } from "date-fns";

const DateFilterDropdown = ({ selectedDate, setSelectedDate, onApply }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="relative">
      {/* BUTTON to open dropdown */}
      {/* <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-white border rounded-lg shadow-sm flex items-center gap-2"
      >
        <span>{selectedDate ? format(selectedDate, "dd MMM yyyy") : "Date"}</span>
        <span>▼</span>
      </button> */}

      {/* DROPDOWN */}
      {open && (
        <div className="absolute z-50 mt-2 bg-white p-4 rounded-xl shadow-xl w-[320px] animate-fadeIn">
          <Calendar
            date={selectedDate || new Date()}
            onChange={(date) => setSelectedDate(date)}
            className="rounded-lg"
          />

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

export default DateFilterDropdown;
