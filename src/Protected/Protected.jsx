import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../lib/context/AuthContext";

function Protected({ children, allowedRoles }) {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  let expiresIn = localStorage.getItem("expiresIn");
  expiresIn = Date.now(expiresIn);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      // If there's no token or required data, redirect to SignIn page
      if (!token || !role || !expiresIn) {
        return;
      }

      //// check this function later
      const currentTime = Date.now() / 1000;

      // Check if the token has expired
      if (currentTime > expiresIn) {
        // Clear stored token details and redirect to SignIn
        localStorage.removeItem("token");
        localStorage.removeItem("expiresIn");
        localStorage.removeItem("role");
        return;
      }

      // Verify token with the backend

      try {
        const response = await axios.get(
          "http://localhost:5156/api/Authentication/verify-token",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status !== 200) {
          // If the token is not valid, clear stored data and redirect to SignIn
          localStorage.removeItem("token");
          localStorage.removeItem("expiresIn");
          localStorage.removeItem("role");
          navigate("/signin");
        }
      } catch (error) {
        console.error("Token verification failed:", error);
        // Handle token verification failure (optional)
        localStorage.removeItem("token");
        localStorage.removeItem("expiresIn");
        localStorage.removeItem("role");
        navigate("/signin");
      }
    };
    // Call token verification
    verifyToken();
  }, [token, role, expiresIn]);

  if (!allowedRoles.includes(role)) {
    // Redirect based on role
    if (role === "Admin") {
      navigate("/dashboard");
    }
    return;
  }

  // If authorized and the token is valid, render the protected content
  return children;
}

export default Protected;
