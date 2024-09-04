import React, { useState } from "react";
import { auth } from "../firebase";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Footer from "../components/Footer";
import frame from '../assets/Frame 1.png'

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [test, setTest] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const Register = (e) => {
    e.preventDefault();

    if (test) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          console.log(userCredentials);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("Password does not match");
    }
  };

  const confirm = (password, confirmPassword) => {
    if (password === confirmPassword) {
      setTest(true);
    } else {
      setTest(false);
    }
  };
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${frame})`,
      }}
    >
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
          className="w-full h-14 md:h-20 px-4 mb-6 border-2 border-pink-500 rounded-2xl focus:outline-none focus:border-pink-600"
          type="email"
          placeholder="Email Address"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="relative w-full">
          <input
            className="w-full h-14 md:h-20 px-4 mb-6 pr-10 border-2 border-pink-500 rounded-2xl focus:outline-none focus:border-pink-600"
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
            {showPassword ? <FaEyeSlash size={25}/> : <FaEye size={25}/>}
          </button>
        </div>

       <div className="relative w-full">
       <input
          className="w-full h-14 md:h-20 px-4 mb-6 border-2 border-pink-500 rounded-2xl focus:outline-none focus:border-pink-600"
          type={showPassword ? "text" : "password"}
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            confirm(password, e.target.value);
          }}
          placeholder="Confirm password"
          required
        />
        <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-500 mb-5 pb-4"
          >
            {showPassword ? <FaEyeSlash size={25}/> : <FaEye size={25}/>}
          </button>
          
       </div>

        {!test && confirmPassword && (
          <p className="text-red-500 text-sm mb-4">Password does not match</p>
        )}
        <button
          type="submit"
          className={`md:w-1/2 w-full h-14 md:h-[60px] text-white rounded-2xl text-lg md:text-xl border-1 border-black ${
            test ? "bg-pink-600" : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!test}
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
