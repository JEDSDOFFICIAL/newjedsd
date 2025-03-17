'use client';

import { motion } from 'framer-motion';

export default function SubmissionGuidelines() {
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
      className="w-[99%] md:w-[80%] mx-auto p-6 bg-white shadow-lg rounded-lg my-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 className="text-2xl font-bold mb-4 text-center" variants={itemVariants}>
        Submission Guidelines
      </motion.h1>
      <motion.p className="text-gray-700 mb-6" variants={itemVariants}>
        The Journal of Embedded and Digital System Design (JEDSD) accepts regular original manuscripts, review papers, and tutorials. Authors must submit their manuscripts through our online submission portal.
      </motion.p>

      <motion.div variants={itemVariants}>
        <h2 className="text-xl font-semibold mt-4">1. Online Submission Portal</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Access Link: <a href="#" className="text-blue-600 underline">Submit Manuscript</a></li>
          <li>User Registration: New users must register for an account.</li>
          <li>Existing users can log in with their credentials.</li>
        </ul>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-xl font-semibold mt-4">2. Submission Process</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Complete the submission form with manuscript details (title, abstract, keywords, authors).</li>
          <li>Choose a corresponding author for communication.</li>
          <li>Upload the manuscript file in <strong>PDF format</strong>.</li>
          <li>Attach a cover letter with the necessary details.</li>
        </ul>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-xl font-semibold mt-4">3. Submission Checklist</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Full manuscript in PDF format.</li>
          <li>Cover letter (PDF).</li>
          <li>Abstract (200-250 words).</li>
          <li>4-5 keywords.</li>
          <li>All author details (affiliations, addresses, contact info).</li>
          <li>Compliance with ethical guidelines.</li>
          <li>Declaration of any conflicts of interest.</li>
        </ul>
      </motion.div>
    </motion.div>
  );
}