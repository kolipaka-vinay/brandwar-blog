import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const ClientLogin: React.FC = () => {
  const [contactNumber, setContactNumber] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);

  const [tempClientId, setTempClientId] = useState("");
  const [tempContactNumber, setTempContactNumber] = useState("");
  const navigate = useNavigate();
  // LOGIN
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/client/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contactNumber, password }),
      });

      const data = await response.json();
      console.log("Login response:", data);

      if (response.ok) {
        if (data.passwordChanged === false) {
          setTempClientId(data.id);
          setTempContactNumber(contactNumber);
          setShowChangePasswordModal(true);
          toast("Please create a new password.", { icon: "🔒" });
        } else {
          console.log("Login successful!");
          localStorage.setItem("token", data.token);
          navigate("/client/home");
        }
      } else {
        toast.error(data.message || "Invalid credentials");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error! Please try again.");
    }
  };

  // CHANGE PASSWORD
  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!tempClientId || !newPassword) {
      toast.error("Please enter a new password.");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:4000/api/client/change-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: tempClientId,
            newPassword,
          }),
        }
      );

      const data = await response.json();
      console.log("Change password response:", data);

      if (response.ok) {
        toast.success("Password changed successfully! Please login again.");
        setShowChangePasswordModal(false);
        setPassword("");
        setNewPassword("");
        setTempClientId("");
        setTempContactNumber("");
      } else {
        toast.error(data.message || "Error changing password");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error! Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Toaster position="top-right" reverseOrder={false} />

      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Client Login</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Contact Number
          </label>
          <input
            type="text"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter your contact number"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter your password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
        >
          Login
        </button>
      </form>

      {/* Change Password Modal */}
      {showChangePasswordModal && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
            <h2 className="text-xl font-bold mb-4 text-center">
              Create New Password
            </h2>
            <form onSubmit={handleChangePassword}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="Enter new password"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
              >
                Change Password
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientLogin;
