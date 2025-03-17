'use client'

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Publishingmodel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 my-4 w-[99%] md:w-[80%]"
    >
      <Card className=" bg-white shadow-lg rounded-2xl p-6">
        <CardContent>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Publishing Model
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Journal of Embedded and Digital System Design (JEDSD) is a newly launched platform where researchers can publish their full-length manuscripts. This journal is new but it aims to become one of the quality journals in the world in the aforesaid domain. The good thing about it is that it focuses on a specific domain that is of prime importance and emerging. Thus we are expecting a few manuscripts to get published within a year and these manuscripts will be peer reviewed by our esteemed reviewers from reputed universities and the manuscripts will be improved based on their comments. 

          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Index, citation, and impact factors are important factors to judge a journal. We are starting afresh and applying for an International Standard Serial (ISSN) number. Gradually we will opt for different index systems. The quality of the manuscripts will be maintained so that they will have maximum citations. No article processing charges (APC) will be charged from the authors as of now for publication. The redemption in APC charges will motivate the researchers to publish quality manuscripts through this journal. 

          </p>
          
        </CardContent>
      </Card>
    </motion.div>
  );
}
