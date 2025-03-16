import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/LgNavbar";
import SmNavbar from "@/components/home/SmNavbar";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="w-auto h-auto flex flex-col items-center justify-center bg-gray-600 gap-4">
      <div className="NavItems w-full h-fit hidden xl:block top-0 fixed  z-[555]">
        <Navbar />
      </div>
      <div className="NavItems w-full h-fit block xl:hidden fixed top-0 z-[555]">
        <SmNavbar />
      </div>
      <div className="w-full h-fit mt-24 items-center flex flex-col justify-center">

      {children}
      </div>
      <Footer />
    </div>
  );
}

// <div className="flex flex-col min-h-screen max-w-screen overflow-x-hidden w-screen no-scrollbar">
//
// {children}
// <Footer/>

// </div>
