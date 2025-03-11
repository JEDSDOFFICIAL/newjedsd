'use client'

import {
  AlignLeft,
  ChevronLeft,
  ChevronRight,
  FacebookIcon,
  Instagram,
  MailCheckIcon,
  SearchIcon,
  TwitterIcon,
  User,
  X,
 
} from "lucide-react";
import React, { useState } from "react";
import "./SmNavbar.css"; // Import the CSS file for animations
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";

function SmNavbar() {
  const [isClicked, setIsClicked] = useState(false);

  const ClickEvent = () => {
    setIsClicked(!isClicked);
  };

  const closeModal = () => {
    setIsClicked(false);
  };
  const [isAboutClicked, setIsAboutClicked] = useState(false);

  const AboutClickEvent = () => {
    console.log("clicked");

    setIsAboutClicked(!isAboutClicked);
  };

  const AboutcloseModal = () => {
    setIsAboutClicked(false);
  };
   const { data: session } = useSession();
   console.log(session?.user);
   
  return (
    <div className="w-full h-fit flex bg-white backdrop-filter backdrop-blur-sm bg-opacity-50  text-black items-center justify-between p-3">
      <div className="flex h-full w-auto gap-6 items-center">
        <AlignLeft onClick={ClickEvent} />
        <Link className="logoArea h-full w-fit" href={'/'}>
        <Image src={'/logored.jpg'} height={50} width={60} alt="logo"/></Link>
      </div>
      <div className="flex h-full w-auto gap-6 items-center">
        <SearchIcon onClick={()=>{alert("We are currently working on it ... plz check after some time")}}/>
        <Link href={session?`/user/${session?.user?.username}`:'/sign-in'}>
        <User />
        </Link>
      </div>
      {isClicked && (
        <div className="fixed top-0 left-0 w-full h-screen flex z-[111]">
          <div className="bg-black/80 backdrop-filter backdrop-blur-sm bg-opacity-20 w-full h-full p-4 slide-in-left">
            <X
              onClick={closeModal}
              className="cursor-pointer text-white absolute right-3 top-2 size-7"
            />
            <nav>
              <ul className="flex flex-col items-center gap-10 text-2xl text-white mt-7">
              <div className="flex flex-col gap-3 items-center justify-center text-2xl text-white ">
                <li
                  className=" flex flex-row gap-2 items-center justify-center"
                  onClick={AboutClickEvent}
                >
                  About Us <ChevronRight />
                </li>
                <li>Community</li>
                
              </div>
              <div className="flex flex-col gap-4 items-center justify-center w-full border-t border-white pt-8">
               
                <Button
                  variant={"outline"}
                  size={"lg"}
                  className="w-full shadow-xl text-xl text-black border border-black"
                >
                  Publish an Article
                </Button>
                <Button
                  variant={"outline"}
                  size={"lg"}
                  className="w-full shadow-xl text-xl text-black border border-black underline"
                >
                  <SearchIcon /> Search an Article
                </Button>
                {
                  session ?
                  <>
                  <Link href={`/user/${session?.user?.username}`}>
                  <Button
                  variant={"default"}
                  size={"lg"}
                  className="w-full shadow-xl text-xl mt-11"
                >
                  Your profile
                </Button>
                  
                  </Link>
                  <Button
                  variant={"destructive"}
                  size={"lg"}
                  className="w-full shadow-xl text-xl mt-11"
                >
                  Sign Out
                </Button> </>: <Link href={"/sign-up"}> <Button
                  variant={"destructive"}
                  size={"lg"}
                  className="w-[95vw] shadow-xl text-xl mt-11"
                >
                  Sign In
                </Button> </Link>
                }
               </div>
              </ul>
            </nav>
            <div className="absolute bottom-4 right-3 flex gap-6 justify-center items-center h-fit w-fit text-white">
              <MailCheckIcon className="hover:scale-125 transition-all duration-300 cursor-pointer" />
              <FacebookIcon className="hover:scale-125 transition-all duration-300 cursor-pointer" />
              <Instagram className="hover:scale-125 transition-all duration-300 cursor-pointer" />
              <TwitterIcon className="hover:scale-125 transition-all duration-300 cursor-pointer" />
            </div>
          </div>
        </div>
      )}
      {isAboutClicked && (
        <div className="fixed top-0 left-0 w-full h-screen flex z-[999]  overflow-y-scroll">
          <div className="bg-black/80 backdrop-filter backdrop-blur-sm bg-opacity-20 w-full h-fit min-h-screen py-9  p-4 slide-in-left">
            <ChevronLeft
              onClick={AboutcloseModal}
              className="cursor-pointer text-white absolute left-3 top-2 size-7"
            />
            <AboutNavbar />
            <div className="absolute top-2 right-3 flex gap-6 justify-center items-center h-fit w-fit text-white">
              <MailCheckIcon className="hover:scale-125 transition-all duration-300 cursor-pointer" />
              <FacebookIcon className="hover:scale-125 transition-all duration-300 cursor-pointer" />
              <Instagram className="hover:scale-125 transition-all duration-300 cursor-pointer" />
              <TwitterIcon className="hover:scale-125 transition-all duration-300 cursor-pointer" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SmNavbar;

const AboutNavbar = () => {
  return (
    <nav className="h-fit w-full">
      <div className="flex md:flex-row flex-col justify-around items-start pl-7 gap-6 text-2xl text-white mt-7">
        <div className="flex flex-col gap-7 text-base">
          <div className="flex flex-col gap-4 text-base">
            <Link href={"/aboutus"} className=" text-gray-200 hover:text-white text-2xl underline transition-all delay-100 cursor-pointer">
              About Us
            </Link>
            <div className="flex flex-col gap-2 text-lg">
              <Link href={"/mission"} className=" text-gray-200 hover:text-white transition-all delay-100 cursor-pointer">
                Our Mission and Vission
              </Link>
             
              <Link href={"/team"} className=" text-gray-200 hover:text-white transition-all delay-100 cursor-pointer">
                Our Team
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 text-base">
            <p className=" text-gray-200 hover:text-white text-2xl underline transition-all delay-100 cursor-pointer">
              News and Announcement
            </p>
            <div className="flex flex-col gap-2 text-lg">
              <Link href={"/callforpapers"} className=" text-gray-200 hover:text-white transition-all delay-100 cursor-pointer">
                Call for Papers
              </Link>
             
            
            </div>
          </div>
          <div className="flex flex-col gap-4 text-base">
            <p className=" text-gray-200 hover:text-white text-2xl underline transition-all delay-100 cursor-pointer">
              Policies and Guideline
            </p>
            <div className="flex flex-col gap-2 text-lg">
              <p className=" text-gray-200 hover:text-white transition-all delay-100 cursor-pointer">
                Editorial Policies
              </p>
              <Link href={"/howwepublish"} className=" text-gray-200 hover:text-white transition-all delay-100 cursor-pointer">
                Submission Guidelines
              </Link>
              <p className=" text-gray-200 hover:text-white transition-all delay-100 cursor-pointer">
                Reviewer Guidelines
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-7 text-base">
          <div className="flex flex-col gap-4 text-base">
            <Link href={"/publishingmodel"} className=" text-gray-200 hover:text-white text-2xl underline transition-all delay-100 cursor-pointer">
              Publishing Model
            </Link>
            <div className="flex flex-col gap-2 text-lg">
              <Link href={"/howwepublish"} className=" text-gray-200 hover:text-white transition-all delay-100 cursor-pointer">
                How we publish
              </Link>
              <Link href={"/templates"} className=" text-gray-200 hover:text-white transition-all delay-100 cursor-pointer">
                Templates
              </Link>
             
              <Link href={"/peerreview"} className=" text-gray-200 hover:text-white transition-all delay-100 cursor-pointer">
                Peer review
              </Link>
            
            </div>
          </div>

          <div className="flex flex-col gap-4 text-base">
            
            <div className="flex flex-col gap-2 text-lg">
              
              <Link href={"/contactus"} className=" text-gray-200 hover:text-white transition-all delay-100 cursor-pointer">
                Contact Us
              </Link>
             
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
/*


*/
