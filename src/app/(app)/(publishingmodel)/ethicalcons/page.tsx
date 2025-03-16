'use client'

import { motion } from 'framer-motion';

const EthicalConsiderations = () => {
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
      className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 className="text-2xl font-bold mb-4 w-full text-center" variants={itemVariants}>
        Ethical Considerations
      </motion.h1>
      <motion.p className="text-gray-700 mb-6" variants={itemVariants}>
        Journal of Embedded and Digital System Design (JEDSD) invites original
        manuscripts for publication. All the manuscripts will go through
        originality checks before acceptance for review.
      </motion.p>

      <motion.div variants={itemVariants}>
        <h2 className="text-xl font-semibold mt-4">1. Originality and Plagiarism:</h2>
        <p className="text-gray-700">All manuscripts must be original and not published elsewhere.</p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-lg font-medium mt-2">Plagiarism Screening:</h2>
        <p className="text-gray-700">Similarity should be below 10% (excluding references).</p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-xl font-semibold mt-4">2. Authorship:</h2>
        <p className="text-gray-700">All authors must have made significant contributions.</p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-lg font-medium mt-2">Corresponding Author:</h2>
        <p className="text-gray-700">One author must be designated for communication with the journal.</p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-xl font-semibold mt-4">3. Data Fabrication and Falsification:</h2>
        <p className="text-gray-700">Authors must ensure the accuracy of all data.</p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-lg font-medium mt-2">Raw Data:</h2>
        <p className="text-gray-700">Authors may be asked to provide raw data for verification.</p>
      </motion.div>
    </motion.div>
  );
};

export default EthicalConsiderations;
