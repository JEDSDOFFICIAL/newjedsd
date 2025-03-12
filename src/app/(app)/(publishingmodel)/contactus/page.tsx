import { motion } from 'framer-motion';

const ContactUs = () => {
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
      className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 className="text-2xl font-bold mb-4" variants={itemVariants}>
        Contact Us
      </motion.h1>
      
      <motion.div variants={itemVariants} className="mb-6">
        <h2 className="text-xl font-semibold">Editor-in-Chief</h2>
        <p className="text-gray-700">Dr. Shirshendu Roy</p>
        <p className="text-gray-700">Assistant Professor</p>
        <p className="text-gray-700">Department of Electronics and Communication</p>
        <p className="text-gray-700">Dayananda Sagar University</p>
        <p className="text-gray-700">Email: <a href="mailto:shirshenduroy-ece@dsu.edu.in" className="text-blue-500">shirshenduroy-ece@dsu.edu.in</a></p>
        <p className="text-gray-700">Ph: <a href="tel:+919330324297" className="text-blue-500">9330324297</a></p>
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <h2 className="text-xl font-semibold">Official Address</h2>
        <p className="text-gray-700">Das Vila</p>
        <p className="text-gray-700">17 - Rajani Kanta Chowdhury Lane</p>
        <p className="text-gray-700">Shibpur, Howrah-711103</p>
        <p className="text-gray-700">Email: <a href="mailto:editorial@jedsd.com" className="text-blue-500">editorial@jedsd.com</a> / <a href="mailto:jedsdofficial@gmail.com" className="text-blue-500">jedsdofficial@gmail.com</a></p>
      </motion.div>
    </motion.div>
  );
};

export default ContactUs;