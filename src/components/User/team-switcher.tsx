"use client"

import { useEffect, useState } from "react"
import { ChevronsUpDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar"
import { useSession } from "next-auth/react"
import axios from "axios"
import { User } from "@/model/User"
import { Button } from "../ui/button"

export function TeamSwitcher() {
  const { isMobile } = useSidebar()
  const { data: session } = useSession()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (session?.user?._id) {
      const fetchUserData = async () => {
        try {
          
          const userid = session.user._id // Use the user ID from session
       
          const response = await axios.get(`/api/findUser?userid=${userid}`)

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
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <img src="/logored.jpg" alt="logo" className="w-6 h-6" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">
                  {session ? session.user.username : <div className="border-gray-500 border-y-4 rounded-full w-6 h-6 animate-spin duration-1000" />}
                </span>
                <span className="truncate text-xs">
                  {session ?user?.usertype : "loading..."}
                </span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-xs text-muted-foreground">
              User Type
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            
            <DropdownMenuItem className="gap-2 p-2 flex  w-full flex-col items-center">
            <Button disabled={user?.usertype==='Reviewer'} className="w-full text-md font-semibold cursor-pointer">
                Author
              </Button>
              <Button disabled={user?.usertype==='Author'} className="w-full text-md font-semibold cursor-not-allowed">
                Reviewer
              </Button>
              
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
