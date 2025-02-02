import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Organisation() {
  const [companyName, setCompanyName] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [scrapedPages, setScrapedPages] = useState([
    { page: "Homepage", status: "scraped" },
    { page: "About Us", status: "pending" },
    { page: "Services", status: "scraped" },
  ]);

  const handleFetchMetaDescription = async () => {
    // Use dummy logic to simulate fetching metadata.
    setCompanyDescription("This is a sample description fetched from the website.");
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
        <motion.h2
          className="text-3xl font-semibold mb-6 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Setup your Organisation
        </motion.h2>

        <form className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <label className="block text-lg font-medium mb-2" htmlFor="companyName">Company Name</label>
            <input 
              type="text" 
              id="companyName"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)} 
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <label className="block text-lg font-medium mb-2" htmlFor="companyWebsite">Company Website URL</label>
            <input 
              type="url" 
              id="companyWebsite"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Company Website URL"
              value={companyWebsite}
              onChange={(e) => setCompanyWebsite(e.target.value)} 
            />
          </motion.div>

          <motion.button
            onClick={handleFetchMetaDescription} 
            type="button"
            className="w-full bg-blue-500 p-3 text-white rounded-md hover:bg-blue-400 transition-all"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Fetch Meta Description
          </motion.button>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <label className="block text-lg font-medium mb-2" htmlFor="companyDescription">Company Description</label>
            <textarea
              id="companyDescription"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Describe your company"
              value={companyDescription}
              onChange={(e) => setCompanyDescription(e.target.value)} 
            />
          </motion.div>

          <motion.div
            className="bg-gray-100 p-4 rounded-md"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h3 className="font-semibold text-lg mb-2">Detected Web Pages</h3>
            <ul>
              {scrapedPages.map((page, index) => (
                <motion.li
                  key={index}
                  className={`py-2 ${page.status === 'scraped' ? 'text-green-500' : 'text-gray-500'}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                >
                  {page.page} - {page.status}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </form>
      </div>
    </div>
  );
}

export default Organisation;
