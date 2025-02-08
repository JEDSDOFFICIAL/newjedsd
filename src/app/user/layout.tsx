'use client'

import  AppSidebar  from "@/components/User/app-sider"

import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { useSession } from "next-auth/react";


export default function Page({children}: {children: React.ReactNode}) {
   const { data: session } = useSession();
   console.log(session);
   
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
           <span>{
            session ? session.user.username : "loading..."
            }</span>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
         
          <div className="min-h-[100vh] flex-1 rounded-xl bg-gray-700/50 md:min-h-min" >
          {children}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
