// api.js
import { URL } from "../helper";

export const loginUser = async (formData, setLoggedIn, setAdmin, navigate) => {
  try {
    const response = await fetch(`${URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (response.ok) {
      setLoggedIn(true);
      console.log(data);
      navigate("/"); // Redirect to home page after successful login
    } else {
      alert(data.message);
    }
    if (data.isAdmin) {
      setAdmin(true);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
