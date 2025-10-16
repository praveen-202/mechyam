// src/components/AdminPage/AdminLogin.jsx
import React, { useState } from "react";
import OTPModal from "./OTPModal";

const AdminLogin = ({ onVerified }) => {
  // State for email and password inputs
  const [formData, setFormData] = useState({ email: "", password: "" });
  // State for error messages
  const [error, setError] = useState("");
  // State to control showing OTP modal
  const [showOTP, setShowOTP] = useState(false);

  // Update form data when inputs change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Verify email and password before showing OTP
  const handleVerify = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    if (formData.email !== "a@a.com" || formData.password !== "a123") {
      setError("Invalid credentials");
      return;
    }

    // Show OTP modal
    setShowOTP(true);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-200">
      {/* Login Form Container */}
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-[400px]">
        <h1 className="text-3xl font-bold text-center text-blue-900 mb-6">
          Admin Login
        </h1>

        <form onSubmit={handleVerify} className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="admin@company.com"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {error && <p className="text-red-600 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-2 rounded-lg font-semibold hover:bg-blue-800 transition"
          >
            Verify
          </button>
        </form>

        {/* OTP Modal: show only if credentials are correct */}
        {showOTP && (
          <OTPModal
            email={formData.email}
            onVerified={onVerified} // Callback when OTP verified
            onClose={() => setShowOTP(false)} // Close OTP modal if user clicks outside
          />
        )}
      </div>
    </div>
  );
};

export default AdminLogin;