"use client"


import { ChevronsUpDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar"

import { Button } from "../ui/button"
import { useSession } from "next-auth/react"
import { User } from "@/model/User"

export function TeamSwitcher({user}:{user?:User|null}) {
  const { isMobile } = useSidebar()
  const { data: session } = useSession()
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
                  {user?.usertype ||'Loading...'}
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
