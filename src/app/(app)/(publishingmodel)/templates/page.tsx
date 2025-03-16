'use client';

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function AuthorResources() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center px-4 my-4"
    >
      <Card className="max-w-5xl bg-white shadow-lg rounded-2xl p-6">
        <CardContent>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Author Resources
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            All manuscripts should be prepared according to the guidelines provided by the journal. If any manuscript does not follow the proper journal template, it will be rejected during the initial check-up stage. The templates for the manuscripts are provided below.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Some of templates are here which can help you.</h3>
          <a className="text-blue-600 p-6" download href="/Journal_Template_word.docx">Download word file</a>
          <a className="text-blue-600 p-6" download href="/Journal_Template_latex.zip">Download Zip folder</a>
          <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">1. Templates for Manuscripts</h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            <strong>Latex Template:</strong> Authors are highly encouraged to prepare their manuscript using the LaTeX template. Manuscripts can be easily prepared using the provided LaTeX template, which can be directly uploaded to Overleaf or edited using the latest TeX live tools.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            <strong>Microsoft Word Template:</strong> Manuscripts can also be prepared using the Microsoft Word template. However, authors should submit the manuscript only in PDF format, ensuring proper formatting.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">2. Templates for Tutorials</h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            For tutorials, separate LaTeX and Word templates should be followed to maintain consistency and clarity.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}