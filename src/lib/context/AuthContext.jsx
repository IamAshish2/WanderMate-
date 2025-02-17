import axios from "axios";
import { useScroll } from "framer-motion";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({
  isAuthenticated: false,
  user: null,
  role: null,
  expiresIn: null,
  login: () => {},
  logout: () => {},
});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function login(data) {
    try {
      const responseData = await axios.post(
        "http://localhost:5156/api/Authentication/Login",
        data
      );
      if (responseData.status === 200) {
        const { token, expiresIn, user } = responseData.data;
        const { role } = user;
        setUser(user);
        if (role && token && expiresIn) {
          localStorage.setItem("token", token);
          localStorage.setItem("role", role);
          localStorage.setItem("expiresIn", expiresIn);
          setIsAuthenticated(true);
        }
        navigate(role === "Admin" ? "/dashboard" : "/user/home");
      } else {
        setIsAuthenticated(false);
        navigate("/");
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
    }
  }

  async function signUp(data) {
    try {
      const response = await axios.post(
        "http://localhost:5156/api/User/Create",
        data
      );
      if (response.status == 200) {
        console.log("User Created Successfully", response.data);
        alert("User Created Successfully!");
        navigate("/Signin");
      }
    } catch (err) {
      if (err.response) {
        console.log("Error", err.response.data);
      }
    }
  }

  useEffect(() => {
    function checkAuthenticated() {
      const token = localStorage.getItem("token");
      const role = localStorage.getItem("role");
      const expiresIn = localStorage.getItem("expiresIn");

      if (token && role && expiresIn) {
        setIsAuthenticated(true);
        return;
      }

      if (!token || !role || !expiresIn) {
        setIsAuthenticated(false);
        navigate("/");
      }
    }

    checkAuthenticated();
  }, [navigate]);

  return (
    <AuthContext.Provider
      value={{
        login,
        signUp,
        user,
        isAuthenticated,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
