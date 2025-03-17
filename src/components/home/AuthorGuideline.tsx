import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { motion } from 'framer-motion';

function AuthorGuideline() {
  const [isNavButtonClicked, setIsNavButtonClicked] = React.useState(
    "SubmissionGuideline"
  );
  const ClickedEvent = (e: string) => {
    setIsNavButtonClicked(e);
   
  };
  

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="h-fit w-full flex flex-col justify-center items-start">
      <div className="buttonGroup w-full h-fit flex flex-row md:gap-3 gap-1 justify-around border-b-2 border-gray-900 py-4 flex-wrap">
        <Button
          size="lg"
          className={`
            ${isNavButtonClicked === "SubmissionGuideline" && "bg-blue-500 text-white hover:bg-blue-600"} text-xs p-0.5 md:text-sm md:p-2 lg:text-base lg:p-3   
          `}
          onClick={() => ClickedEvent("SubmissionGuideline")}
          
        >
          Submission Guideline
        </Button>
        <Button
          size="lg"
          className={`
            ${isNavButtonClicked === "Templates" && "bg-blue-500 text-white hover:bg-blue-600"} text-xs p-0.5 md:text-sm md:p-2 lg:text-base lg:p-3   
          `}
          onClick={() => ClickedEvent("Templates")}
        >
          Author Resources
        </Button>
        <Button
          size="lg"
          className={`
            ${isNavButtonClicked === "SubmitMenuscript" && "bg-blue-500 text-white hover:bg-blue-600"} text-xs p-0.5 md:text-sm md:p-2 lg:text-base lg:p-3   
          `}
          onClick={() => ClickedEvent("SubmitMenuscript")}
        >
          Submit Menuscript
        </Button>
        <Button
                      
                      className={`
                        ${isNavButtonClicked === "PeerReviewProcess" && "bg-blue-500 text-white hover:bg-blue-600"} text-xs p-0.5 md:text-sm md:p-2 lg:text-base lg:p-3   
                      `}
                      onClick={() => ClickedEvent("PeerReviewProcess")}
                      
                    >
                      Peer Review Process
                    </Button>
                    <Button
                      
                      className={`
                        ${isNavButtonClicked === "PublicationEthics" && "bg-blue-500 text-white hover:bg-blue-600"} text-xs p-0.5 md:text-sm md:p-2 lg:text-base lg:p-3   
                      `}
                      onClick={() => ClickedEvent("PublicationEthics")}
                    >
                      Publication Ethics
                    </Button>
                    
      </div>

      <div className="textArea w-full">
        {isNavButtonClicked === "SubmissionGuideline" && (
          <div className="p-6">
          
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

        <Link href={"/submissionguideline"} className="w-full h-fit flex justify-center items-center">
              <Button
                variant="destructive"
                size="lg"
                className="mt-4 border border-black shadow-md"
                
              >
                Read More !
              </Button></Link>
        </div>
        )}
        {isNavButtonClicked === "Templates" && (
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Author Resources</h1>

            <h2 className="text-xl font-bold mb-2">1. Templates:</h2>
            <ul className="list-disc ml-4">
              <li>
                Manuscript Template: Downloadable templates in Word and LaTeX
                formats.
              </li>
              <li>
                Figure and Table Guidelines: Instructions on preparing
                high-quality figures and tables.
              </li>
            </ul>

            <h2 className="text-xl font-bold mb-2">2. Writing Assistance:</h2>
            <ul className="list-disc ml-4">
              <li>
                Language Editing Services: Recommendations for professional
                editing services to improve clarity and readability.
              </li>
              <li className="text-gray-600/90">
                Guidelines for Non-native English Speakers: Tips for writing
                clear and grammatically correct English.
              </li>
            </ul>

            <h2 className="text-xl font-bold mb-2 text-gray-800/70">3. Research Data:</h2>
            <ul className="list-disc ml-4">
              <li className="text-gray-600/50">
                Data Sharing Policies: Guidelines on sharing research data,
                including repositories and data citation.
              </li>
              <li  className="text-gray-600/20">
                Supplementary Materials: Instructions for submitting
                supplementary materials.
              </li>
            </ul>
            <div className="w-full h-fit flex justify-center items-center ">
              <Link href={"/templates"}>
              <Button
                variant="destructive"
                size="lg"
                className="mt-4 border border-black shadow-md"
                
              >
                Read More !
              </Button></Link>
            </div>
          </div>
        )}
        {
            isNavButtonClicked === "SubmitMenuscript" && (
                <div className="p-4">
                <h2 className="text-xl font-bold mb-2">Online Submission Portal:</h2>
                <ul className="list-disc ml-4">
                  <li>Access Link: [Submit Manuscript]</li>
                  <li>User Registration: New users must register for an account. Existing users can log in with their credentials.</li>
                  <li>Submission Form: Fill out the required fields, including manuscript title, abstract, keywords, and author details.</li>
                  <li>File Upload: Upload the manuscript file and any supplementary materials.</li>
                  <li>Cover Letter: Include a cover letter as part of the submission.</li>
                </ul>
          
                <h2 className="text-xl font-bold mb-2">Submission Checklist:</h2>
                <ul className="list-disc ml-4">
                  <li>Manuscript file in the correct format.</li>
                  <li className=" text-gray-600/80">Cover letter with the necessary details.</li>
                  <li className=" text-gray-700/60">High-quality figures and tables.</li>
                  <li className=" text-gray-700/40">Compliance with ethical guidelines.</li>
                  <li className=" text-gray-700/20">All authors&apos; contributions and conflicts of interest disclosed.</li>
                </ul>
          
                
                <div className="w-full h-fit flex justify-center items-center">
                  <Link href={"/callforpapers"}>
                    <Button
                        variant="destructive"
                        size="lg"
                        className="mt-4 border border-black shadow-md"
                        
                    >
                        Read More
                    </Button></Link>
                </div>
              </div>
            
            )
        }
         {isNavButtonClicked === "PeerReviewProcess" && (
                      <div className="p-4">
                      <h1 className="text-2xl font-bold mb-4">Peer Review Process</h1>
                
                      <h2 className="text-xl font-bold mb-2">1. Initial Submission:</h2>
                      <ul className="list-disc ml-4">
                        <li>Manuscript Submission: Authors submit their manuscripts through the online submission system.</li>
                        <li>Preliminary Check: The editorial office conducts an initial screening to ensure the manuscript adheres to the journal&apos;s formatting and ethical guidelines. Manuscripts that do not meet these criteria are returned to the authors for correction.</li>
                      </ul>
                
                      <h2 className="text-xl font-bold mb-2">2. Assignment to Associate Editor:</h2>
                      <ul className="list-disc ml-4">
                        <li>Editor Assignment: The Editor-in-Chief assigns the manuscript to an appropriate Associate Editor based on the manuscript&apos;s subject area.</li>
                        <li>Reviewer Selection: The Associate Editor selects two or more independent reviewers with expertise in the relevant field.</li>
                      </ul>
                
                      <h2 className="text-xl font-bold mb-2 text-gray-950/80">3. Peer Review:</h2>
                      <ul className="list-disc ml-4">
                        <li className='text-gray-950/60'>Double-Blind Review: JEDSD follows a double-blind review process, where both the reviewers and the authors remain anonymous to each other.</li>
                        <li className='text-gray-950/40'>Review Criteria: Reviewers evaluate the manuscript based on originality, technical quality, significance, clarity, and relevance to the journal&apos;s scope.</li>
                        <li className='text-gray-950/20'>Reviewer Reports: Reviewers provide detailed feedback and recommendations: accept, minor revisions, major revisions, or reject.</li>
                      </ul>
                      <Link href={"/peerreview"} className='w-full h-fit flex items-center justify-center'>
                        <Button variant={"destructive"} size={"lg"} className='mt-4' >Read More</Button>
                      </Link>
                    </div>
                    )}
                    {isNavButtonClicked === "PublicationEthics" && (
                      <div className="p-4">

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
                             <Link href={"/ethicalcons"} className='w-full h-fit flex items-center justify-center'>
                        <Button variant={"destructive"} size={"lg"} className='mt-4' >Read More</Button>
                      </Link>
                             </div>
                    )}
                   
      </div>
    </div>
  );
}

export default AuthorGuideline;
