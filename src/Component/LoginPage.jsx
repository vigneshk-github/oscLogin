import React from "react";
import { Form, useNavigation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authAction } from "../store/auth";

const LoginPage = () => {
  const dispatch = useDispatch();

  function handleSubmit(event) {
    const fd = new FormData(event.target);
    const acquisitionChannel = fd.getAll("acquisition");
    const data = Object.fromEntries(fd.entries());
    data.acquisition = acquisitionChannel;
    dispatch(authAction.login());
    dispatch(authAction.loginEmail(data["email_id"]));

  }


  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <Form method="post" onSubmit={handleSubmit}>
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
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <button
          disabled={isSubmitting}
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {isSubmitting ? "Logging..." : "Login"}
        </button>
      </Form>
    </div>
  );
};

export default LoginPage;

// import React, { useState } from "react";
// import { useNavigate,Link } from "react-router-dom";

// const LoginPage = ({ loginUser }) => {
//   const [formData, setFormData] = useState({
//     email_id: "",
//     password: "",
//   });
//   const [loginSuccess, setLoginSuccess] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const success = await loginUser(formData);
//     if (success) {
//       setLoginSuccess(true);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
//       <h2 className="text-2xl font-semibold mb-4">Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label
//             htmlFor="email"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Email
//           </label>
//           <input
//             id="email"
//             type="email"
//             name="email_id"
//             value={formData.email_id}
//             onChange={handleChange}
//             className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="password"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Password
//           </label>
//           <input
//             id="password"
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//         >
//           Login
//         </button>
//       </form>
//       {loginSuccess && (
//         <p className="mt-4 text-green-600">Login successful! Welcome!</p>
//       )}
//     </div>
//   );
// };

// export default LoginPage;
