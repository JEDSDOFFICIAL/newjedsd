import React from 'react';

const AuthorGuidelines = () => {
  return (
    <div className="h-fit my-4 mx-auto p-6 shadow-lg rounded-lg bg-white w-[99%] md:w-[95%]">
      <h1 className="text-2xl font-bold mb-4 w-full text-center">Author Guidelines</h1>
      <p className="text-gray-700 mb-6">
        The Journal of Embedded and Digital System Design (JEDSD) accepts original manuscripts that satisfy the objective of the journal. Manuscripts should be prepared as per the guidelines mentioned on the website. Manuscripts that have not followed the journal guidelines will face automatic rejection.
      </p>
      
      <h2 className="text-xl font-semibold mt-4">Manuscript Preparation:</h2>
      <ul className="list-disc pl-6 text-gray-700">
        <li><strong>Subject Area:</strong> Identify the sub-domain or article type that best matches the manuscript.</li>
        <li><strong>Title:</strong> The title should be concise and informative. It may contain the key invention and methodology. Avoid abbreviations and formulae.</li>
        <li><strong>Abstract:</strong> 200-250 words summarizing the research question, methodology, results, and conclusion.</li>
        <li><strong>Keywords:</strong> Authors must provide 4-5 keywords for better indexing and searchability.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">Main Text:</h2>
      <ul className="list-disc pl-6 text-gray-700">
        <li><strong>Introduction:</strong> Context, objectives, and significance of the study. It should include a literature survey.</li>
        <li><strong>Background Work:</strong> Brief theory, detailed methodology, procedures, and analysis techniques.</li>
        <li><strong>Proposed Work:</strong> Discuss the proposed work in detail with supporting figures and tables.</li>
        <li><strong>Results and Comparison:</strong> Present findings with tables and figures. Compare results with state-of-the-art works.</li>
        <li><strong>Discussion:</strong> Interpretation of results, implications, limitations, and future directions.</li>
        <li><strong>Conclusion:</strong> Summary of findings and their significance.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">Additional Guidelines:</h2>
      <ul className="list-disc pl-6 text-gray-700">
        <li><strong>References:</strong> Follow IEEE citation style.</li>
        <li><strong>Figures:</strong> High-quality images (.jpg, .jpeg, .png, .pdf) with proper captions.</li>
        <li><strong>Tables:</strong> Editable tables (not images) with captions above.</li>
        <li><strong>Equations:</strong> Must be numbered and written in an equation editor (not images).</li>
        <li><strong>Algorithms:</strong> Must be numbered and formatted properly.</li>
      </ul>
    </div>
  );
};

export default AuthorGuidelines;
