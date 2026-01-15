import { CalendarDays } from "lucide-react";

const EventUpdateElement = () => {
  return (
    <div className="flex cursor-pointer items-start gap-4 rounded-xl bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
      
      {/* Icon */}
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-pink-100 text-pink-600">
        <CalendarDays size={20} />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h4 className="text-sm font-semibold text-gray-800">
          Event Update
        </h4>

        <p className="mt-1 text-xs text-gray-500">
          The product launch event has been rescheduled.
        </p>

        <span className="mt-2 inline-block text-xs font-medium text-pink-600">
          📅 20 Jan 2026 · 4:00 PM
        </span>
      </div>
    </div>
  );
};

export default EventUpdateElement;
