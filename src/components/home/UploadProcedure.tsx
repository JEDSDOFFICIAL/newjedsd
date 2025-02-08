import React from "react";
// import { Button } from "../ui/button";
import AuthorGuideline from "./AuthorGuideline";

// import EditorGuideline from "./EditorGuideline";
// import ReviewerGuideline from "./ReviewerGuideline";

function UploadProcedure() {
 

  return (
    <div className="w-full h-fit bg-[rgb(39,60,90)] px-3">
      <div className="h-fit w-full text-center md:text-6xl text-3xl underline text-white font-bold py-3">
        Guideline and Policy
      </div>
      <div className="w-full min-h-[80vh] h-fit py-4 flex  md:flex-row flex-col justify-center">
        {/* <div className="md:w-[20%] w-full md:h-full h-fit flex md:flex-col flex-row gap-4 text-xl text-black font-medium items-center py-7 justify-center flex-wrap"> */}
          {/* <Button
            variant={"outline"}
            className={`
              ${
                isButtonClicked === "AuthorGuideline" &&
                "bg-gray-400 border border-black text-white"
              }
            `}
            onClick={() => ClickedEvent("AuthorGuideline")}
          >
            Author Guideline
          </Button> */}
          {/* <Button
            variant={"outline"}
            className={`
              ${
                isButtonClicked === "Editor" &&
                "bg-gray-400 border border-black text-white"
              }
            `}
            onClick={() => ClickedEvent("Editor")}
          >
            Editor Guideline
          </Button>
          <Button
            variant={"outline"}
            className={`
              ${
                isButtonClicked === "Reviewer" &&
                "bg-gray-400 border border-black text-white"
              }
            `}
            onClick={() => ClickedEvent("Reviewer")}
          >
            Reviewer Guideline
          </Button> */}
          {/* <Button
            variant={"outline"}
            size={"lg"}
            onClick={() => ClickedEvent("Publication")}
          >
            Publication Process
          </Button> */}
        {/* </div> */}

        <div className="h-fit md:w-[85%] w-full ">
          {(
            <div className="w-full h-full bg-white  text-black text-xs md:text-base border border-black rounded-lg">
              <AuthorGuideline />
            </div>
          )}
          {/* {isButtonClicked === "Editor" && (
            <div className="w-full h-full bg-white  text-black text-xs md:text-base border border-black rounded-lg" >
              <EditorGuideline />
            </div>
          )}
          {isButtonClicked === "Reviewer" && (
            <div className="w-full h-full bg-white  text-black text-xs md:text-base border border-black rounded-lg">
              <ReviewerGuideline />
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}

export default UploadProcedure;
