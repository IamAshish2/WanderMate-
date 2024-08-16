import React, { useState } from "react";
import "../index.css";
import bgimg from "../assets/undraw_signin.svg";
import axios from "axios";
import { signInSchema } from "../validation/formValidation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchema),
  });

  const onSubmit = async (data) => {
    try {
      const responseData = await axios.post(
        "http://localhost:5156/api/Authentication/Login",
        data
      );
      if (responseData.status === 200) {
        const { token, role, expiresIn } = responseData.data.response; // Ensure correct access
        localStorage.setItem("token", token);
        localStorage.setItem("expiresIn", expiresIn);
        localStorage.setItem("role", role);
        setUser({ role }); // Update state with role

        navigate(role === "Admin" ? "/dashboard" : "/user/home");
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
    }
  };

  return (
    <>
      <div className="h-screen w-full flex justify-center items-center ">
        <div
          className="h-full w-full sm:h-[80%] sm:w-[80%] grid sm:grid-cols-2 "
          style={{ boxShadow: "20px 20px 20px #DEDEDE)" }}
        >
          <div className="flex justify-center">
            <div className="flex  flex-col justify-center text-center">
              <p className="font-bold text-2xl text-blue-700 mb-4 ">Sign In</p>

              <form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div>
                  <input
                    className="signup-input"
                    type="text"
                    placeholder="Username"
                    name="username"
                    {...register("username")}
                  />
                  {errors.username && (
                    <p className="text-xs lg:text-sm text-red-600 font-semibold">
                      {errors.username.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    className="signup-input"
                    type="text"
                    placeholder="password"
                    name="password"
                    {...register("password")}
                  />
                  {errors.password && (
                    <p className="text-xs lg:text-sm text-red-600 font-semibold">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <button
                  className="bg-blue-800 mt-5 p-2 text-white font-bold rounded-md"
                  type="submit"
                >
                  Sign In
                </button>
              </form>

              <div className="flex  gap-[4px] mt-2 justify-center">
                <input type="checkbox" />
                <p>
                  New Here?{" "}
                  <span className="text-blue-700">
                    <a href="/Signup">Sign Up</a>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center text-center gap-4 mt-12">
            <img src={bgimg} alt="background image" />
            <p>
              Or sign up with <span className="text-blue-700">...</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
