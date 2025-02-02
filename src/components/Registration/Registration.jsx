import React, { useState } from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";

function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isGoogleAuth, setIsGoogleAuth] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API for registration (email verification, etc.)
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <motion.div
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-3xl font-bold text-center mb-6 text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Register to BeyondChats
        </motion.h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            whileFocus={{ scale: 1.05 }}
          />
          <motion.input
            type="email"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            whileFocus={{ scale: 1.05 }}
          />
          <motion.input
            type="password"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            whileFocus={{ scale: 1.05 }}
          />
          <motion.button
            type="submit"
            className="w-full bg-blue-500 cursor-pointer text-white p-3 rounded-md font-semibold hover:bg-blue-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register
          </motion.button>
          <motion.button
            type="button"
            className="w-full flex items-center cursor-pointer border-2 border-gray-600 justify-center text-black p-3 rounded-md font-semibold hover:transition duration-300"
            onClick={() => setIsGoogleAuth(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FcGoogle className="mr-2 text-xl" />
            Continue with Google
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

export default Registration;
