import React, { useState } from "react";

const SettingsPage = () => {
  const [form, setForm] = useState({
    name: "Anubhav Singh",
    email: "anubhav@gmail.com",
    role: "Admin",
    theme: "light",
    emailNotifications: true,
    systemAlerts: true,
    twoFactorAuth: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSave = () => {
    alert("Settings saved successfully ✅");
    console.log(form);
  };

  return (
    <div className="min-h-screen mx-10 rounded-2xl bg-gray-100 p-6">

      {/* PAGE HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
        <p className="text-gray-500">
          Manage your account preferences and system settings
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* LEFT SIDEBAR */}
        <div className="bg-white rounded-2xl shadow p-4 space-y-2">
          {[
            "Profile",
            "Account",
            "Appearance",
            "Notifications",
            "Security",
          ].map((item) => (
            <div
              key={item}
              className="px-4 py-3 rounded-xl cursor-pointer hover:bg-gray-100 font-medium text-gray-700"
            >
              {item}
            </div>
          ))}
        </div>

        {/* RIGHT CONTENT */}
        <div className="lg:col-span-3 space-y-6">

          {/* PROFILE CARD */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">
              Profile Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="border rounded-xl px-4 py-2"
              />

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="border rounded-xl px-4 py-2"
              />

              <input
                value={form.role}
                disabled
                className="border rounded-xl px-4 py-2 bg-gray-100 text-gray-500"
              />
            </div>
          </div>

          {/* APPEARANCE */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">
              Appearance
            </h2>

            <select
              name="theme"
              value={form.theme}
              onChange={handleChange}
              className="border rounded-xl px-4 py-2 w-full"
            >
              <option value="light">Light Mode</option>
              <option value="dark">Dark Mode</option>
            </select>
          </div>

          {/* NOTIFICATIONS */}
          <div className="bg-white rounded-2xl shadow p-6 space-y-4">
            <h2 className="text-xl font-semibold">
              Notifications
            </h2>

            <div className="flex justify-between items-center">
              <span>Email Notifications</span>
              <input
                type="checkbox"
                name="emailNotifications"
                checked={form.emailNotifications}
                onChange={handleChange}
              />
            </div>

            <div className="flex justify-between items-center">
              <span>System Alerts</span>
              <input
                type="checkbox"
                name="systemAlerts"
                checked={form.systemAlerts}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* SECURITY */}
          <div className="bg-white rounded-2xl shadow p-6 space-y-4">
            <h2 className="text-xl font-semibold">
              Security
            </h2>

            <div className="flex justify-between items-center">
              <span>Two-Factor Authentication</span>
              <input
                type="checkbox"
                name="twoFactorAuth"
                checked={form.twoFactorAuth}
                onChange={handleChange}
              />
            </div>

            <button className="text-blue-600 font-medium">
              Change Password →
            </button>
          </div>

          {/* DANGER ZONE */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
            <h2 className="text-lg font-semibold text-red-600 mb-3">
              Danger Zone
            </h2>

            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">
                Logout from all devices
              </span>
              <button className="text-red-600 font-medium">
                Logout All
              </button>
            </div>
          </div>

          {/* SAVE */}
          <div className="flex justify-end">
            <button
              onClick={handleSave}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow"
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
