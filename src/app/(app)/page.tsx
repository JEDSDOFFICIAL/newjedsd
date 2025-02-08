"use client";

import React from 'react';
// import Loader from '@/components/Genaral/Loader';
import Footer from "@/components/home/Footer";
import HomeFirstElement from "@/components/home/HomeFirstElement";

import Roadmap from "@/components/home/Roadmap";
import UploadProcedure from "@/components/home/UploadProcedure";

export default function Home() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);


  return (
    // loading ? <Loader /> : (
        <div className="bg-blue-50 h-screen overflow-x-hidden w-screen overflow-auto no-scrollbar">
        
        <HomeFirstElement />
        <Roadmap />
        {/* <Testimonials /> */}
        <UploadProcedure />
        <Footer />
      </div>
      
  );
}