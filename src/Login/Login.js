import React, { useState } from "react";
import {
  FaUser,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaUserGraduate,
  FaUserShield,
  FaArrowLeft,
  FaSignInAlt
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [loginType, setLoginType] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");

    if (!username.trim() || !password.trim()) {
      setError("Please enter your username/email and password.");
      return;
    }

    if (loginType === "user") {
      const storedUser = localStorage.getItem("rpiUser");

      if (!storedUser) {
        setError("No user account found. Please register first.");
        return;
      }

      const user = JSON.parse(storedUser);

      const usernameMatch =
        username.toLowerCase() === user.email?.toLowerCase() ||
        username.toLowerCase() === user.name?.toLowerCase();

      const passwordMatch = password === user.password;

      if (!usernameMatch || !passwordMatch) {
        setError("Invalid user email/username or password.");
        return;
      }

      localStorage.setItem(
        "rpiLoggedInUser",
        JSON.stringify({
          name: user.name,
          email: user.email,
          role: "user",
          loggedIn: true
        })
      );

      if (rememberMe) {
        localStorage.setItem(
          "rpiUser",
          JSON.stringify({
            ...user,
            rememberMe: true
          })
        );
      }

      navigate("/");
      return;
    }

    if (loginType === "admin") {
      if (
        username === "admin@rpi.edu.np" &&
        password === "admin123"
      ) {
        localStorage.setItem(
          "rpiLoggedInUser",
          JSON.stringify({
            name: "RPI Administrator",
            email: "admin@rpi.edu.np",
            role: "admin",
            loggedIn: true
          })
        );

        navigate("/admin");
        return;
      }

      setError("Invalid admin email or password.");
    }
  };

  if (!loginType) {
    return (
      <div className="min-h-[75vh] bg-gray-100 flex items-center justify-center px-5 py-12">

        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">

          <div className="bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600 text-white text-center px-8 py-10">

            <div className="w-20 h-20 mx-auto rounded-full bg-white text-blue-900 flex items-center justify-center text-3xl font-extrabold shadow-lg">
              RPI
            </div>

            <h1 className="text-3xl font-extrabold mt-5">
              Login
            </h1>

            <p className="text-blue-100 mt-2">
              Rolpa Polytechnic Institute
            </p>

          </div>

          <div className="p-8">

            <h2 className="text-center text-2xl font-bold text-gray-800">
              Choose Login Type
            </h2>

            <p className="text-center text-gray-500 mt-2 mb-7">
              Select how you want to access the website
            </p>

            <div className="space-y-4">

              <button
                onClick={() => {
                  setLoginType("user");
                  setError("");
                }}
                className="w-full border-2 border-blue-700 rounded-xl p-5 flex items-center gap-5 hover:bg-blue-700 hover:text-white transition group"
              >

                <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-2xl group-hover:bg-white">
                  <FaUserGraduate />
                </div>

                <div className="text-left">

                  <h3 className="text-xl font-bold">
                    User Login
                  </h3>

                  <p className="text-sm text-gray-500 group-hover:text-blue-100">
                    Login as student or user
                  </p>

                </div>

              </button>

              <button
                onClick={() => {
                  setLoginType("admin");
                  setError("");
                }}
                className="w-full border-2 border-yellow-500 rounded-xl p-5 flex items-center gap-5 hover:bg-yellow-500 hover:text-black transition group"
              >

                <div className="w-14 h-14 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center text-2xl group-hover:bg-white">
                  <FaUserShield />
                </div>

                <div className="text-left">

                  <h3 className="text-xl font-bold">
                    Admin Login
                  </h3>

                  <p className="text-sm text-gray-500 group-hover:text-gray-800">
                    Login as website administrator
                  </p>

                </div>

              </button>

            </div>

            <div className="text-center mt-7">

              <p className="text-gray-600 text-sm">
                Don't have a user account?
              </p>

              <Link
                to="/signup"
                className="inline-block mt-2 text-blue-700 font-bold hover:underline"
              >
                Create Account
              </Link>

            </div>

          </div>

        </div>

      </div>
    );
  }

  return (
    <div className="min-h-[75vh] bg-gray-100 flex items-center justify-center px-5 py-12">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">

        <div className="bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600 text-white text-center px-8 py-8">

          <button
            onClick={() => {
              setLoginType(null);
              setUsername("");
              setPassword("");
              setError("");
            }}
            className="absolute ml-[-150px] mt-1 text-white hover:text-yellow-300"
          >
            <FaArrowLeft />
          </button>

          <div className="w-20 h-20 mx-auto rounded-full bg-white text-blue-900 flex items-center justify-center text-3xl font-extrabold shadow-lg">
            RPI
          </div>

          <h1 className="text-3xl font-extrabold mt-4">
            {loginType === "admin" ? "Admin Login" : "User Login"}
          </h1>

          <p className="text-blue-100 mt-2">
            Rolpa Polytechnic Institute
          </p>

        </div>

        <div className="p-8">

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 mb-5 text-sm">
              {error}
            </div>
          )}

          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >

            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {loginType === "admin"
                  ? "Admin Email"
                  : "Username or Email"}
              </label>

              <div className="relative">

                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-700" />

                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder={
                    loginType === "admin"
                      ? "admin@rpi.edu.np"
                      : "Enter username or email"
                  }
                  className="w-full border border-gray-300 rounded-lg py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
                />

              </div>

            </div>

            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>

              <div className="relative">

                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-700" />

                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full border border-gray-300 rounded-lg py-3 pl-11 pr-11 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-700"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>

              </div>

            </div>

            <div className="flex items-center justify-between text-sm">

              <label className="flex items-center gap-2 text-gray-600">

                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="accent-blue-700"
                />

                Remember me

              </label>

              {loginType === "user" && (
                <button
                  type="button"
                  className="text-blue-700 font-semibold hover:underline"
                >
                  Forgot Password?
                </button>
              )}

            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition"
            >
              <FaSignInAlt />
              {loginType === "admin" ? "Admin Login" : "Login"}
            </button>

          </form>

          {loginType === "user" && (
            <div className="text-center mt-6 text-sm text-gray-600">

              Don't have an account?

              <Link
                to="/signup"
                className="text-blue-700 font-bold ml-2 hover:underline"
              >
                Register
              </Link>

            </div>
          )}

        </div>

      </div>

    </div>
  );
};

export default Login;