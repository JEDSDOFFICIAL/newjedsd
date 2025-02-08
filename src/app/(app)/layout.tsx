import Navbar from "@/components/home/LgNavbar";
import SmNavbar from "@/components/home/SmNavbar";


interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
       <div className="NavItems w-full h-fit hidden xl:block fixed z-[555]">
          <Navbar />
        </div>
        <div className="NavItems w-full h-fit block xl:hidden fixed z-[555]">
          <SmNavbar />
        </div>
      {children}
    </div>
  );
}
