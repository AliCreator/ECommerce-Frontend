import React, { useState } from "react";
import { FcShop } from "react-icons/fc";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLoginMutation } from "../slices/authApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials, setEvents } from "../slices/authSlice";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Please provide both email and password!");
      return;
    }
    try {
      const res = await login({ email, password });
      dispatch(setCredentials(res.data.data.user));
      dispatch(setEvents(res.data.data.events))
      navigate("/");
    } catch (error) {
      toast.error("Incorrect credentials!");
    }
  };
  if (user) {
    return <Navigate to="/" replace />;
  }

  return (
    <section className="min-h-screen px-3 py-1 md:py-12 flex flex-col items-center  gap-4 lg:gap-8 max-w-full">
      <FcShop className="text-6xl" />
      <h2 className="text-xl font-bold text-center">
        Sign into your East Market account
      </h2>
      <div className="flex flex-col gap-2 items-center max-w-xl w-full">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email here"
          className="outline-none border border-slate-800 rounded-sm px-4 py-2 w-full dark:text-slate-950"
        />
        <div className="relative w-full">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your password here"
            className="outline-none border border-slate-800 rounded-sm px-4 py-2 w-full dark:text-slate-950"
          />
          <span
            className="absolute top-2 right-2 cursor-pointer underline text-gray-400 italic"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>

        <button
          onClick={handleLogin}
          className="px-4 py-2 bg-red-700 text-white w-full rounded-md cursor-pointer font-semibold flex items-center justify-center gap-3"
          disabled={isLoading}
        >
          <span>Sign in</span>
          {isLoading && <span className="animate-spin">𖦹</span>}
        </button>
        <Link to="/" className="text-gray-600 underline lg:my-2 text-center">
          Forgot password?
        </Link>
        <Link
          to="/register"
          className="px-4 py-2 bg-white border border-slate-800 w-full cursor-pointer rounded-md text-center"
        >
          Create your East Market account
        </Link>
      </div>
      <p className="px-4 text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, non.
      </p>
    </section>
  );
};

export default LoginScreen;
