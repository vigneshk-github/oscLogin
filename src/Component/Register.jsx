import React, { useState } from "react";
import { URL } from "../helper.js";
import { useNavigate} from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    email_id: "",
    password: "",
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="text"
            name="email_id"
            value={userDetails.email}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={userDetails.password}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Additional Options
          </label>
          <div className="mt-2 space-y-2">
            <div>
              <input
                id="checkbox1"
                type="checkbox"
                name="checkbox1"
                checked={userDetails.checkbox1}
                onChange={handleChange}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label htmlFor="checkbox1" className="ml-2 text-sm text-gray-700">
                Shloka Master
              </label>
            </div>
            <div>
              <input
                id="checkbox2"
                type="checkbox"
                name="checkbox2"
                checked={userDetails.checkbox2}
                onChange={handleChange}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label htmlFor="checkbox2" className="ml-2 text-sm text-gray-700">
                Wisdom Tales
              </label>
            </div>
            <div>
              <input
                id="checkbox3"
                type="checkbox"
                name="checkbox3"
                checked={userDetails.checkbox3}
                onChange={handleChange}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label htmlFor="checkbox3" className="ml-2 text-sm text-gray-700">
                Tava kathamrtam
              </label>
            </div>
            <div>
              <input
                id="checkbox4"
                type="checkbox"
                name="checkbox4"
                checked={userDetails.checkbox4}
                onChange={handleChange}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label htmlFor="checkbox4" className="ml-2 text-sm text-gray-700">
                The Nature's Way
              </label>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
