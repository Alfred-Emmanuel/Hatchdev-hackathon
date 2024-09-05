import React, { useState } from "react";
import { auth } from "../firebase";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import Footer from "../components/Footer";
import frame from "../assets/Frame 1.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    const validationErrors = {};
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      validationErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      validationErrors.email = "Invalid email format";
    }

    if (!password) {
      validationErrors.password = "Password is required";
    } else if (password.length < 6) {
      validationErrors.password = "Password should be at least 6 characters";
    }

    if (!confirmPassword) {
      validationErrors.confirmPassword = "Please confirm your password";
    } else if (password !== confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    return validationErrors;
  };

  const Register = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setErrors({});

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          toast.success("Sign up successful!");
          return signInWithEmailAndPassword(auth, email, password);
        })

        .then((signInCredentials) => {
          toast.success("Signed in successfully!");

          setTimeout(() => {
            navigate("/product_list");
          }, 1500);
        })

        .catch((error) => {
          toast.error(error.message); 
        });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${frame})`,
      }}
    >
      <ToastContainer />

      <form
        onSubmit={Register}
        className="mb-10 flex flex-col p-10 lg:w-4/5 w-11/12 max-w-2xl h-auto items-center justify-center bg-white rounded-3xl shadow-lg mt-10"
      >
        <h2 className="md:text-4xl text-2xl font-semibold mb-4 mt-5">
          Create An Account
        </h2>
        <p className="text-center mb-6 w-4/5 text-sm md:text-base">
          Create an account to access different fashion brands based on your
          preference and location
        </p>

        <input
          className={`w-full h-14 md:h-20 px-4 mb-2 border-2 ${
            errors.email ? "border-red-500" : "border-pink-500"
          } rounded-2xl focus:outline-none focus:border-pink-600`}
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="text-red-500 text-sm mb-4">{errors.email}</p>}

        <div className="relative w-full">
          <input
            className={`w-full h-14 md:h-20 px-4 mb-2 pr-10 border-2 ${
              errors.password ? "border-red-500" : "border-pink-500"
            } rounded-2xl focus:outline-none focus:border-pink-600`}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
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
        {errors.password && <p className="text-red-500 text-sm mb-4">{errors.password}</p>}

        <div className="relative w-full">
          <input
            className={`w-full h-14 md:h-20 px-4 mb-2 border-2 ${
              errors.confirmPassword ? "border-red-500" : "border-pink-500"
            } rounded-2xl focus:outline-none focus:border-pink-600`}
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-500 mb-5 pb-4"
          >
            {showPassword ? <FaEyeSlash size={25} /> : <FaEye size={25} />}
          </button>
        </div>
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mb-4">{errors.confirmPassword}</p>
        )}

        <button
          type="submit"
          className={`md:w-1/2 w-full h-14 md:h-[60px] text-white rounded-2xl text-lg md:text-xl border-1 border-black ${
            Object.keys(errors).length === 0 ? "bg-pink-600" : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Create Account
        </button>

        <p className="mt-6 text-sm md:text-base">
          Already Have An Account?{" "}
          <a href="/sign_in" className="text-pink-600 hover:underline">
            Sign In
          </a>
        </p>
      </form>

      <Footer />
    </div>
  );
}

export default SignUp;
