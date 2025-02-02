import React from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";

function SuccessScreen() {
  return (
    <div className="flex flex-col items-center py-8">
      <Confetti />
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Chatbot Integration Successful!
      </motion.h1>
      <motion.div
        className="flex space-x-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-blue-500 p-3 text-white rounded-md"
        >
          Explore Admin Panel
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-green-500 p-3 text-white rounded-md"
        >
          Start Talking to Your Chatbot
        </motion.button>
      </motion.div>
      <motion.div
        className="mt-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#3b5998", color: "white" }}
          whileTap={{ scale: 0.9 }}
          className="bg-gray-200 p-2 rounded-full mx-2"
        >
          Share on Facebook
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#1da1f2", color: "white" }}
          whileTap={{ scale: 0.9 }}
          className="bg-gray-200 p-2 rounded-full mx-2"
        >
          Share on Twitter
        </motion.button>
      </motion.div>
    </div>
  );
}

export default SuccessScreen;
