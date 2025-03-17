'use client';

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
      className="mx-auto p-6 bg-white shadow-lg rounded-lg mt-4 w-[99%] md:w-[80%]"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 className="text-2xl font-bold mb-4 w-full text-center" variants={itemVariants}>
        Ethical Considerations
      </motion.h1>
      <motion.p className="text-gray-700 mb-6" variants={itemVariants}>
        The Journal of Embedded and Digital System Design (JEDSD) invites original manuscripts for publication. 
        All manuscripts will undergo originality checks before acceptance for review. Authors must adhere to the 
        following ethical guidelines when submitting their manuscripts.
      </motion.p>

      <motion.div variants={itemVariants}>
        <h2 className="text-xl font-semibold mt-4">1. Originality and Plagiarism:</h2>
        <p className="text-gray-700">
          All manuscripts must be original and must not have been previously published or under consideration elsewhere. 
          Submitting the same manuscript to multiple journals is strictly prohibited and will result in the authors being barred from future submissions.
        </p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-lg font-medium mt-2">Plagiarism Screening:</h2>
        <p className="text-gray-700">
          Authors must ensure that their manuscript has a similarity of less than 10% (excluding references). 
          All submissions will undergo plagiarism screening, and any manuscript exceeding the acceptable limit will be rejected immediately.
        </p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-xl font-semibold mt-4">2. Authorship:</h2>
        <p className="text-gray-700">
          All listed authors must have made significant contributions to the research and manuscript preparation. 
          The inclusion of ghost authors (who have not contributed) is strictly prohibited. Any changes to authorship after submission 
          must be communicated to the editor-in-chief by the corresponding author.
        </p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-lg font-medium mt-2">Corresponding Author:</h2>
        <p className="text-gray-700">
          One author must be designated as the corresponding author, responsible for all communication with the journal. 
          Requests for changing the corresponding author will only be considered with a signed application and approval from the editor-in-chief.
        </p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-xl font-semibold mt-4">3. Data Fabrication and Falsification:</h2>
        <p className="text-gray-700">
          Authors must ensure that all data presented in their manuscript is accurate and has not been manipulated. 
          Data fabrication and falsification are serious ethical violations and will result in immediate rejection.
        </p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-lg font-medium mt-2">Raw Data:</h2>
        <p className="text-gray-700">
          Authors may be required to provide raw data for verification purposes. This measure helps ensure research integrity 
          and prevents manipulation of research findings.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default EthicalConsiderations;
