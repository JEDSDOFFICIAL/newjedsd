"use client"

import React from "react";

function Trial() {
  const handleDownload = async () => {
    try {
      const response = await fetch(
        "https://res.cloudinary.com/dvnys2mq6/raw/upload/v1742074364/f2tx7zitbvxc9chw3bwg.pdf"
      );
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      // Create a temporary link element
      const a = document.createElement("a");
      a.href = url;
      a.download = "manuscript1.pdf"; // Set desired filename
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      
      // Revoke URL to free up memory
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <button onClick={handleDownload}>Download Manuscript</button>
  );
}

export default Trial;
