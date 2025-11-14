"use client"

import * as React from "react"
import {
  BookOpen,
  GalleryVerticalEnd,
  GitGraph,
  HelpingHand,
  Settings2,
  SquareTerminal,
  Users,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Brayan Mlawa",
    email: "brayanmlawa0917.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Mkuu Family",
      logo: GalleryVerticalEnd,
      plan: "Community",
    }

  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/Dashboard",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "contributions",
      url: "/contributions",
      icon: HelpingHand,
    },
    {
      title: "Members",
      url: "/members",
      icon: Users,
    },

    {
      title: "Analytics",
      url: "/analytics",
      icon: GitGraph,
    },
    {
      title: "Documentation",
      url: "/documentation",
      icon: BookOpen,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings2,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
