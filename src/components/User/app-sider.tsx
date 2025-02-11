"use client"

import * as React from "react"
import {
 
  BookOpen,
 LayoutDashboard,
 UploadIcon

} from "lucide-react"

import { NavMain } from "./nav-main"

import { NavUser } from "./nav-user"
import { TeamSwitcher } from "./team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { User } from "@/model/User"

// This is sample data.
const data = {
  navMain: [
    {
      title: "User Dashboard",
      url: "#",
      icon: LayoutDashboard,
      isActive: true,
      items: [
        {
          title: "Profile",
          url: "#",
        },
        {
          title: "Home",
          url: "/",
        },
        // {
        //   title: "Settings",
        //   url: "#",
        // },
      ],
    },
    {
      title: "Upload",
      url: "#",
      icon: UploadIcon,
      items: [
        {
          title: "Upload Paper",
          url: "/upload",
        },
        {
          title: "Track Paper",
          url: "/Track",
        },
        {
          title: "Read uploaded papers",
          url: "/search",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Reviewer Guidelines",
          url: "#",
        },
        {
          title: "Author Guidelines",
          url: "#",
        },
        {
          title: "Editorial Guidelines",
          url: "#",
        },
        {
          title: "Policies",
          url: "#",
        },
      ],
    },
  
  ],
}

export default function AppSidebar({user}:{user?:User|null}) {
  return (
    <Sidebar collapsible="icon" >
      <SidebarHeader>
        <TeamSwitcher  user={user}/>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
