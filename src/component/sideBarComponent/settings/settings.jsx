import React, { useState } from "react";

const SettingsPage = () => {
  const [form, setForm] = useState({
    name: "Anubhav Singh",
    email: "anubhav@gmail.com",
    theme: "light",
    notifications: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSave = () => {
    alert("Settings Saved Successfully ✅");
    console.log(form);
  };

  return (
    <div className="p-6 bg-[#bfdbfe] min-h-screen">

      {/* PAGE TITLE */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Settings
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT MENU */}
        <div className="bg-white rounded-2xl shadow p-4">
          <ul className="space-y-3 text-gray-700 font-medium">
            <li className="p-3 bg-blue-100 rounded-xl text-blue-700 cursor-pointer">
              Profile Settings
            </li>
            <li className="p-3 hover:bg-gray-100 rounded-xl cursor-pointer">
              Account
            </li>
            <li className="p-3 hover:bg-gray-100 rounded-xl cursor-pointer">
              Notifications
            </li>
            <li className="p-3 hover:bg-gray-100 rounded-xl cursor-pointer">
              Security
            </li>
          </ul>
        </div>

        {/* RIGHT CONTENT */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6 space-y-6">

          {/* PROFILE */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Profile Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="border rounded-xl px-4 py-2 focus:outline-blue-400"
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="border rounded-xl px-4 py-2 focus:outline-blue-400"
              />
            </div>
          </div>

          {/* THEME */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              Theme Preference
            </h2>

            <select
              name="theme"
              value={form.theme}
              onChange={handleChange}
              className="border rounded-xl px-4 py-2 w-full focus:outline-blue-400"
            >
              <option value="light">Light Mode</option>
              <option value="dark">Dark Mode</option>
            </select>
          </div>

          {/* NOTIFICATIONS */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">
                Email Notifications
              </h2>
              <p className="text-sm text-gray-500">
                Receive updates and alerts
              </p>
            </div>

            <input
              type="checkbox"
              name="notifications"
              checked={form.notifications}
              onChange={handleChange}
              className="w-5 h-5"
            />
          </div>

          {/* SAVE BUTTON */}
          <div className="text-right">
            <button
              onClick={handleSave}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl shadow"
            >
              Save Changes
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SettingsPage;