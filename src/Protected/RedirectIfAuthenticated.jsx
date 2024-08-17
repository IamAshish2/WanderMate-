import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RedirectIfAuthenticated = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  console.log(token);
  useEffect(() => {
    const checkAuthentication = async () => {
      // if token is present
      if (token) {
        //check for authorization of the user. if the user is authorized then, the user is already logged in. so we block the access
        // by navigating to user's home page and preventing the user from going to the signing/signup page
        try {
          const response = await axios.get(
            "http://localhost:5156/api/Authentication/verify-token",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (response.status === 200) {
            // Redirect to the user's home page if the token is valid
            navigate("/user/home", { replace: true });
          }
        } catch (error) {
          console.error("Token verification failed:", error);
          // Handle token verification failure (optional)
        }
      }
    };
    checkAuthentication();
  }, [token, navigate]);

  // go to the signin page if the user is not authenticated
  return children;
};

export default RedirectIfAuthenticated;
