import { useState } from "react"
import { LOGIN_BG } from "../utils/constants"
import Header from "./Header"

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true)
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }

  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src={LOGIN_BG}
        alt="login background"
        className="w-full h-full object-cover"
      />

      {/* Header */}
      <Header />

      {/* Login Form */}
      <form className="absolute inset-0 flex items-center justify-center">
        <div className="bg-transparent border border-white backdrop-blur-md p-8 md:p-10 rounded-2xl w-[90%] max-w-md">
          <h2 className="text-3xl font-semibold text-white mb-6 text-center">
            {isSignInForm ? "Sign In" : "Sign Up"} to Cinesage
          </h2>

          {!isSignInForm && <><input
            type="text"
            placeholder="Enter Your Name"
            className="w-full p-3 mb-4 rounded-lg border border-white bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#ED0F48]"
          />
          
          <input
            type="tel"
            pattern="[0-9]{10}"
            placeholder="Phone Number"
            className="w-full p-3 mb-4 rounded-lg border border-white bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#ED0F48] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none appearance-none"
          /></>}

          <input
            type="text"
            placeholder="Email Address"
            className="w-full p-3 mb-4 rounded-lg border border-white bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#ED0F48]"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 rounded-lg border border-white bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#ED0F48]"
          />

          <button
            type="submit"
            className="cursor-pointer w-full bg-[#ED0F48] hover:bg-white hover:text-black transition duration-300 text-white font-semibold py-3 rounded-lg shadow-md"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          {/* Sign Up prompt */}
          <div className="mt-6 text-center">
            <p className="text-white text-sm mb-2">{isSignInForm ? "New to CineSage?" : "Already Registered?"}</p>
            <button
              type="button"
              className="cursor-pointer w-full border border-white text-white py-2 rounded-lg hover:bg-white hover:text-black transition duration-300"
              onClick={toggleSignInForm}
            >
              {isSignInForm ? "Create An Account" : "Sign In Now"}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
