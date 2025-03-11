import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function AuthorGuideline() {
  const [isNavButtonClicked, setIsNavButtonClicked] = React.useState(
    "SubmissionGuideline"
  );
  const ClickedEvent = (e: string) => {
    setIsNavButtonClicked(e);
   
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
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Manuscript Preparation</h1>
            <ul className="list-disc ml-4">
              <li>
                <span className="font-bold">Title:</span> Concise and
                informative. Avoid abbreviations and formulae.
              </li>
              <li>
                <span className="font-bold">Abstract:</span> Maximum 250 words,
                summarizing the research question, methodology, results, and
                conclusion.
              </li>
              <li>
                <span className="font-bold">Keywords:</span> 3-5 keywords to
                facilitate indexing and search.
              </li>
              <li>
                <span className="font-bold">Main Text:</span> Structured as
                Introduction, Methods, Results, Discussion, and Conclusion.
                <ul className="list-disc ml-4">
                  <li>
                    <span className="font-bold">Introduction:</span> Context,
                    objectives, and the significance of the study.
                  </li>
                  <li>
                    <span className="font-bold">Methods:</span> Detailed
                    methodology, including materials, procedures, and analysis
                    techniques.
                  </li>
                  <li>
                    <span className="font-bold">Results:</span> Clear and
                    concise presentation of findings with appropriate use of
                    tables and figures.
                  </li>
                  <li  className="text-gray-600/90">
                    <span className="font-bold">Discussion:</span>{" "}
                    Interpretation of results, implications, limitations, and
                    future directions.
                  </li>
                  <li className="text-gray-600/70">
                    <span className="font-bold">Conclusion:</span> Summary of
                    findings and their significance.
                  </li>
                </ul>
              </li>
              <li className="text-gray-600/50">
                <span className="font-bold">References:</span> Follow IEEE
                citation style.
              </li>
              <li className="text-gray-600/30">
                <span className="font-bold">Figures and Tables:</span>{" "}
                High-quality images with descriptive captions. Tables should be
                editable.
              </li>
              <li className="text-gray-600/10">
                <span className="font-bold">Supplementary Material:</span>{" "}
                Optional; include additional data or material that supports the
                manuscript.
              </li>
            </ul>
            <div className="w-full h-fit flex justify-center items-center ">
              <Link href={"/howwepublish"}>
              
              <Button
                variant="destructive"
                size="lg"
                className="mt-4 border border-black shadow-md"
                
              >
                Read More
              </Button></Link>
            </div>
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
                        <Button variant={"destructive"} size={"lg"} className='mt-4' onClick={()=>{alert("We are currently working on it ... plz check after some time")}}>Read More</Button>
                      </Link>
                    </div>
                    )}
                    {isNavButtonClicked === "PublicationEthics" && (
                       <div className="p-4">
                       <h1 className="text-2xl font-bold mb-4">Ethical Considerations</h1>
                 
                       <h2 className="text-xl font-bold mb-2">1. Originality and Plagiarism:</h2>
                       <ul className="list-disc ml-4">
                         <li>Original Work: All manuscripts must be the original work of the authors and not previously published or under consideration elsewhere.</li>
                         <li>Plagiarism Screening: Manuscripts are checked for plagiarism using specialized software. Any instance of plagiarism will result in the immediate rejection of the manuscript.</li>
                       </ul>
                 
                       <h2 className="text-xl font-bold mb-2">2. Authorship:</h2>
                       <ul className="list-disc ml-4">
                         <li>Author Contributions: All listed authors must have made significant contributions to the research and manuscript preparation.</li>
                         <li  className='text-gray-900/85'>Corresponding Author: One author must be designated as the corresponding author, responsible for all communication with the journal.</li>
                       </ul>
                 
                       <h2 className="text-xl font-bold mb-2 text-gray-900/70">3. Data Fabrication and Falsification:</h2>
                       <ul className="list-disc ml-4">
                         <li className='text-gray-950/40'>Data Integrity: Authors must ensure that all data presented in the manuscript is accurate and has not been manipulated.</li>
                         <li className='text-gray-950/20'>Raw Data: Authors may be asked to provide raw data for verification purposes.</li>
                       </ul>
                       <Link href={"/publishingmodel"} className='w-full h-fit flex items-center justify-center'>
                        <Button variant={"destructive"} size={"lg"} className='mt-4'  onClick={()=>{alert("We are currently working on it ... plz check after some time")}}>Read More</Button>
                      </Link>
                     </div>
                    )}
                   
      </div>
    </div>
  );
}

export default AuthorGuideline;
