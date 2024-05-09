import React, { useState } from "react";
import LoginPage from "./Component/LoginPage";
import Register from "./Component/Register";
import Home from "./Component/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Root from "./Component/Root";
import { loginUser } from "./Component/api";
import "./App.css";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setAdmin] = useState(false);

  const handleLogin = (formData, navigate) => {
    loginUser(formData, setLoggedIn, setAdmin, navigate);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Root />}
        >
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/LoginPage" element={<LoginPage loginUser={handleLogin} />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
