'use client'

import { motion } from 'framer-motion';



export default function  ConflictOfInterest  () {
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
    };
  
    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };
  
    return (
      <motion.div
        className="mx-auto p-6 bg-white shadow-lg rounded-lg mt-4 w-[99%] md:w-[80%]"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 className="text-2xl font-bold mb-4 text-center" variants={itemVariants}>
          Conflict of Interest
        </motion.h1>
        <motion.p className="text-gray-700 mb-6" variants={itemVariants}>
          The editorial board will check the conflict of interest for each of the manuscripts in the initial check or throughout the review duration. Authors must declare if any conflict of interest is associated with their manuscripts.
        </motion.p>
  
        <motion.div variants={itemVariants}>
          <h2 className="text-xl font-semibold mt-4">1. Definition:</h2>
          <p className="text-gray-700">A conflict of interest occurs when financial, personal, or professional affiliations could influence research outcomes.</p>
        </motion.div>
  
        <motion.div variants={itemVariants}>
          <h2 className="text-xl font-semibold mt-4">2. Disclosure Requirements:</h2>
          <p className="text-gray-700">Authors must disclose financial support, employment, stock ownership, and other potential conflicts.</p>
        </motion.div>
  
        <motion.div variants={itemVariants}>
          <h2 className="text-lg font-medium mt-2">Reviewers:</h2>
          <p className="text-gray-700">Reviewers must disclose any conflicts before accepting a review assignment.</p>
        </motion.div>
  
        <motion.div variants={itemVariants}>
          <h2 className="text-xl font-semibold mt-4">3. Editorial Board:</h2>
          <p className="text-gray-700">Editorial members must disclose any conflicts related to the manuscripts they handle.</p>
        </motion.div>
      </motion.div>
    );
  };
  