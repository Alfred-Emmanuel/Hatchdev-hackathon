import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import useAuthDetails from "../custom-hooks/useAuthDetails";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Footer from "../components/Footer";
import loginBg from "../assets/Login Page.png";
import fashion from "../assets/Fashion 2.png";
import { Link } from 'react-router-dom';

function SignIn() {
  const { authUser, userSignOut } = useAuthDetails();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const SignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${loginBg})`,
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center w-full px-4">
        <div className="flex justify-center mb-8 md:mb-0 md:w-1/2">
          <img
            src={fashion}
            alt="Fashion Banner"
            className="md:w-[850px] w-full md:h-full h-[300px] object-cover"
          />
        </div>

        <div className="flex flex-col md:w-1/2 w-full">
          <form
            onSubmit={SignIn}
            className="mb-10 flex flex-col p-10 lg:w-4/5 w-11/12 max-w-2xl h-auto justify-center mt-10"
          >
            <h1 className="text-left md:text-4xl text-2xl font-bold mb-4 mt-5">
              Welcome Back!
            </h1>
            <p className="text-left text-2xl ">Shop with Bandage</p>
            <p className="mb-2 text-left text-2xl mt-6 pt-6 font-semibold">
              Email
            </p>
            <input
              className="w-full h-14 md:h-18 px-4 mb-6 border-2 border-black rounded-lg focus:outline-none focus:border-pink-600"
              required
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="mb-2 text-left text-2xl font-semibold">Password</p>
            <div className="relative w-full">
              <input
                className="w-full h-14 md:h-18 px-4 mb-6 pr-10 border-2 border-black rounded-lg focus:outline-none focus:border-pink-600"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-500 mb-5 pb-4"
              >
                {showPassword ? <FaEyeSlash size={25} /> : <FaEye size={25} />}
              </button>
            </div>
            <a href="" className="text-right text-blue-800">
              Forgot Password?
            </a>
            <button
              type="submit"
              className="mt-4 w-full h-14 md:h-[60px] text-white rounded-2xl text-lg md:text-xl bg-blue-800"
            >
              Sign In
            </button>
            <p className="text-center mt-6 text-xl">
              New to Bandage?{" "}
              <Link to="/register" className="text-blue-800 font-bold">Sign Up</Link>
              
            </p>
          </form>
        </div>
      </div>

      <div>
        {authUser ? (
          <div>
            <p> Signed In </p>
            <button onClick={userSignOut}> Sign Out </button>
          </div>
        ) : (
          <div>
            <p>Signed Out</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default SignIn;
