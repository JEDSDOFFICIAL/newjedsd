'use client'

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function HowwePublish() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen my-4 px-4 w-[99%] md:w-[80%] "
    >
      <Card className="max-w-5xl bg-white shadow-lg rounded-2xl p-6">
        <CardContent>
       <CallForPapers/>
        </CardContent>
      </Card>
    </motion.div>
  );
}



const CallForPapers = () => {
    return (
      <div className="max-w-5xl mx-auto  shadow-md rounded-lg">
        
        <h2 className="text-2xl font-bold my-4 w-full text-center">Submit Manuscript</h2>
        <p className="mb-4">
          The Journal of Embedded and Digital System Design (JEDSD) accepts regular original manuscripts, review papers, or tutorials. Authors should submit their manuscripts through our online submission portal only. Any other way of submission will not be entertained.
        </p>
        <h3 className="text-xl font-bold mb-2">Online Submission Portal:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Access Link:</strong> <a href="#" className="text-blue-600 underline">Submit Manuscript</a></li>
          <li><strong>User Registration:</strong> New users must register for an account. Existing users can log in with their credentials.</li>
          <li><strong>Submission Form:</strong> Fill out the required fields, including manuscript title, abstract, keywords, and author details.</li>
          <li><strong>Corresponding Author:</strong> Any author can be a corresponding author through which all the communications related to the manuscripts will be done.</li>
          <li><strong>File Upload:</strong> Upload the manuscript file and any supplementary materials. Manuscripts will be accepted only in PDF format.</li>
          <li><strong>Cover Letter:</strong> Include a cover letter as part of the submission.</li>
        </ul>
        <h3 className="text-xl font-bold mt-6 mb-2">Submission Checklist:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Full Manuscript file in the correct format (PDF).</li>
          <li>Cover letter with the necessary details (PDF).</li>
          <li>Abstract in 200-250 words.</li>
          <li>Keywords: 4-5 keywords are mandatory to provide.</li>
          <li>All author details with their current affiliations, addresses, and contact details.</li>
          <li>Compliance with ethical guidelines.</li>
          <li>Any declaration related to conflicts of interest.</li>
        </ul>
      </div>
    );
  };
  

  