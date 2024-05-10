import React, { formData } from "react";
import { URL } from "../helper";
import { json, redirect } from "react-router-dom";
import LoginPage from "./LoginPage";

export default function Login() {
  return <LoginPage />;
}

export async function action({ request }) {
  const data = await request.formData();
  const eventData = {
    email_id: data.get("email_id"),
    password: data.get("password"),
  };

  const response = await fetch(`${URL}/api/auth/login`, {
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
