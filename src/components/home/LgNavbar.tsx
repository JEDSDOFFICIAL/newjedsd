'use client'

import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  FacebookIcon,
  Instagram,
  LogIn,
  MailCheckIcon,
  Search,
  XIcon,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import {  useSession } from "next-auth/react";

import { Button } from "../ui/button";

function Navbar() {
  const [isChangeBg, setIsChangeBg] = useState(false);  
  
   useEffect(() => {
     setTimeout(() => {
       setIsChangeBg(true);
     },3000)
   }, []);
   const { data: session } = useSession();
  return (
    <DropdownMenu>
      <div
        className={`w-full h-fit max-h-[6.5rem] fixed top-0 left-0 z-50 transition-all ${isChangeBg?'bg-white/100 backdrop-blur-sm':'bg-transparent'} duration-300 bg-transparent flex justify-around items-center py-3`}
      >
        <Link href={"/"} className="w-20 h-20  border border-black ">
            <img src="/logored.jpg" alt="logo" className="w-full h-full object-fit" />  
        </Link>
        
        <div className="navArea h-full flex items-center w-[calc(100%-14rem)] justify-between px-8">
          <div className="navArea h-full flex items-center gap-16 text-[1.2rem]">
            <DropdownMenuTrigger asChild>
              <div className={`flex h-fit w-fit gap-2 flex-row items-center cursor-pointer ${isChangeBg?' text-black':'text-white'}`}>
                About Us <ChevronDown />
              </div>
            </DropdownMenuTrigger>

            <div
              onClick={() => {
                alert(
                  "We are currently working on it ... plz check after some time"
                );
              }}
              className={`cursor-pointer ${isChangeBg?' text-black':'text-white'}`}
            >
              Articles
            </div>
           
            <Link href={session?.user &&`/user/${session?.user?.username}/upload`||""}
              
              className={`cursor-pointer ${isChangeBg?' text-black':'text-white'}`}
            >
              Publish an Article
            </Link>
          </div>

          <div className="h-full flex items-center gap-16">
            <div
              className="flex bg-blue-100 h-fit w-[20vw] gap-2 flex-row-reverse items-center justify-end border rounded-xl px-3 py-2 border-black underline"
              onClick={() => {
                alert(
                  "We are currently working on it ... plz check after some time"
                );
              }}
            >
              Search for an Article
              <Search />
            </div>
            <div className="flex items-center gap-4">
            {session ? (
          <>
           <Link href={`/user/${session?.user?.username}`}>
           <Button  className="w-full md:w-auto bg-slate-100 text-black" variant='outline'>
              Your profile
            </Button>
           </Link>
          
          </>
        ) : (
          <Link href="/sign-in">
            <Button className="w-full md:w-auto bg-slate-100 text-black" variant={'outline'}><LogIn/>Login</Button>
          </Link>
        )}
            </div>
          </div>
        </div>
      </div>
      <DropdownMenuContent className="w-[100vw] h-[50vh] bg-white text-black flex flex-row items-start py-7  justify-around">
        <div className="flex flex-col justify-start items-start">
          <Link href={"/aboutus"} className="text-xl underline font-bold py-4">About us</Link>

          <div className="flex flex-col gap-4 text-base">
            <Link href={"/mission"} className=" text-gray-600 hover:text-black transition-all delay-100 cursor-pointer">
              Our Mission and Vission
            </Link>
            
            <Link href={"/team"} className=" text-gray-600 hover:text-black transition-all delay-100 cursor-pointer">
              Our Team
            </Link>
            
           
          </div>
        </div>
     
        <div className="flex flex-col justify-start items-start">
          <h1 className="text-xl underline font-bold py-4">Our Policies</h1>

          <div className="flex flex-col gap-4 text-base">
            {/* <p className=" text-gray-600 hover:text-black transition-all delay-100 cursor-pointer">
              Editorial Policies
            </p> */}
            <p className=" text-gray-600 hover:text-black transition-all delay-100 cursor-pointer">
              Submission Guidelines
            </p>
            <p className=" text-gray-600 hover:text-black transition-all delay-100 cursor-pointer">
              Reviewer Guidelines
            </p>
            
            <Link href={"/ethicalcons"} className=" text-gray-600 hover:text-black transition-all delay-100 cursor-pointer">
              Ethical Considerations
            </Link>
            <Link href={"/conflictofinterest"} className=" text-gray-600 hover:text-black transition-all delay-100 cursor-pointer">
              Conflict of Interest
            </Link>
            
           
          </div>
        </div>
        <div className="flex flex-col justify-start items-start">
          <Link href={"/publishingmodel"} className="text-xl underline font-bold py-4">Publishing Model</Link>

          <div className="flex flex-col gap-4 text-base">
          <Link href={"/callforpapers"} className=" text-gray-600 hover:text-black transition-all delay-100 cursor-pointer">
              Call for Papers
            </Link>
            <Link href={"/howwepublish"} className=" text-gray-600 hover:text-black transition-all delay-100 cursor-pointer">
              How We Publish
            </Link>
            <Link href={"/templates"} className=" text-gray-600 hover:text-black transition-all delay-100 cursor-pointer">
              Templates
            </Link>
           
            <Link href={"/peerreview"} className=" text-gray-600 hover:text-black transition-all delay-100 cursor-pointer">
              Peer review
            </Link>
            {/* <p className=" text-gray-600 hover:text-black transition-all delay-100 cursor-pointer">
              Research Topics
            </p> */}
          </div>
        </div>
        <div className="flex flex-col justify-start items-start">
          <h1 className="text-xl underline font-bold py-4">Get in Touch</h1>

          <div className="flex flex-col gap-4 text-base">
            {/* <p className=" text-gray-600 hover:text-black transition-all delay-100 cursor-pointer">
              Be a Sponser
            </p> */}
            <Link href={"/contactus"} className=" text-gray-600 hover:text-black transition-all delay-100 cursor-pointer">
              Contact Us
            </Link>
           
          </div>
        </div>
        <div className="absolute bottom-2 right-3 flex gap-6 justify-center items-center h-fit w-fit">
          <MailCheckIcon className="hover:scale-125 transition-all duration-300 cursor-pointer" />
          <FacebookIcon className="hover:scale-125 transition-all duration-300 cursor-pointer" />
          <Instagram className="hover:scale-125 transition-all duration-300 cursor-pointer" />
          <XIcon className="hover:scale-125 transition-all duration-300 cursor-pointer" />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Navbar;
