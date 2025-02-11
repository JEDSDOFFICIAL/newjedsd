'use client'

import  AppSidebar  from "@/components/User/app-sider"

import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { useSession } from "next-auth/react";

import axios from "axios"
import { useEffect, useState } from "react"
import { User } from "@/model/User";
export default function Page({children}: {children: React.ReactNode}) {
   const { data: session } = useSession();
   const [user, setUser] = useState<User | null>(null)
   const [loading, setLoading] = useState<boolean>(true)
   const [error, setError] = useState<string | null>(null)
 
   useEffect(() => {
     if (session?.user?._id) {
       const fetchUserData = async () => {
         try {
           
           const username = session?.user?.username // Use the user ID from session
        
           const response = await axios.get(`/api/findUser/${username}`)
 
          console.log('Response:', response.data); // Log the response data
 
           if (response.data.success) {
             setUser(response.data.user)
           } else {
             setError(response.data.message)
           }
         } catch (err) {
           setError("Error fetching user data")
           console.error("Error fetching user data:", err)
         } finally {
           setLoading(false)
         }
       }
 
       fetchUserData()
     }
   }, [session]) // Dependency on session, it will trigger when session changes
 
   if (loading) {
     return <p>Loading...</p>
   }
 
   if (error) {
     return <p>Error: {error}</p>
   }
 
  return (
    <SidebarProvider>
      <AppSidebar user={user} />
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
         
          <div className="h-[100vh] flex-1 rounded-xl bg-gray-700/50 md:min-h-min overflow-auto" >
          {children}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
