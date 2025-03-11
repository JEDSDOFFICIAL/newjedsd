'use client';

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function PeerReviewProcess() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 mt-24"
    >
      <Card className="max-w-3xl bg-white shadow-lg rounded-2xl p-6">
        <CardContent>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Peer Review Process
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            The quality of the journal is most important to us. Each manuscript must have some level of innovation and should not be plagiarized. Journal of Embedded and Digital System Design (JEDSD) ensures that each manuscript goes through a peer review and plagiarism check process.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            All manuscripts will be reviewed by at least three anonymous reviewers from reputed institutions, selected by the editorial team. Two reviewers will be from the core or primary area, and one reviewer will be from the application or secondary area.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">1. Initial Checkup</h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Submitted manuscripts undergo an initial screening for formatting and ethical compliance. If criteria are not met, authors will be asked to make corrections.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">2. Assignment to Associate Editor</h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            The Editor-in-Chief assigns the manuscript to an Associate Editor who selects expert reviewers.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">3. Peer Review</h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            JEDSD follows a blind review process where reviewers evaluate originality, technical quality, significance, clarity, and relevance.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">4. Final Decision</h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Reviewers’ comments are compiled by the Associate Editor, and the final decision is made by the Editor-in-Chief and conveyed via email.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
