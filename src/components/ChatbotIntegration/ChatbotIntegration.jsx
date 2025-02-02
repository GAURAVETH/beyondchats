import React from "react";
import { motion } from "framer-motion";

function ChatbotIntegration() {
  const handleTestChatbot = () => {
    window.open("https://clientwebsite.com", "_blank");
  };

  const handleIntegrateChatbot = () => {
    // Show instructions to copy-paste the code
  };

  const handleMailToDeveloper = () => {
    // Open email client to send integration instructions to developer
  };

  return (
    <motion.div
      className="flex flex-col items-center py-10"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.h2
        className="text-3xl font-semibold mb-6 text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Chatbot Integration & Testing
      </motion.h2>

      <motion.div
        className="flex space-x-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <motion.button
          onClick={handleTestChatbot}
          className="bg-blue-500 px-5 py-3 text-white rounded-lg shadow-md font-medium hover:bg-blue-600 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Test Chatbot
        </motion.button>

        <motion.button
          onClick={handleIntegrateChatbot}
          className="bg-green-500 px-5 py-3 text-white rounded-lg shadow-md font-medium hover:bg-green-600 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Integrate on Website
        </motion.button>

        <motion.button
          onClick={handleMailToDeveloper}
          className="bg-yellow-500 px-5 py-3 text-white rounded-lg shadow-md font-medium hover:bg-yellow-600 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Mail Instructions to Developer
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default ChatbotIntegration;
