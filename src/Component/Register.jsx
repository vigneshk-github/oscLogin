import RegisterPage from "./RegisterPage";
import { URL } from "../helper";
import { json, redirect } from "react-router-dom";

export default function Register() {
  return <RegisterPage />;
}

export async function action({request}) {
    const data = await request.formData();
    const eventData = {
      email_id: data.get("email_id"),
      password: data.get("password"),
    };

    const response = await fetch(`${URL}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    });
    if (!response.ok) {
      throw { message: "Could not Fetch Events" };
    }
    console.log(response);
    return redirect("/");
}
