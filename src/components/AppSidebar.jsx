import { Calendar, Home, Inbox, Search, Settings, ChevronRight } from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem,
    SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import { useLocation, NavLink } from 'react-router-dom';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";

// Menu items.
const navItems = [
    {
        title: "Home",
        url: "/home",
        icon: Home,
        items: []
    },
    {
        title: "Inbox",
        url: "/inbox",
        icon: Inbox,
        items: []
    },
    {
        title: "Calendar",
        url: "/calendar",
        icon: Calendar,
        items: [
            {
                title: "Calendar",
                url: "/calendar",
                icon: Calendar,
            }
        ]
    },
    {
        title: "Search",
        url: "/search",
        icon: Search,
        items: []
    },
    {
        title: "Settings",
        url: "/settings",
        icon: Settings,
        items: []
    },
];

export function AppSidebar() {
    const location = useLocation();

    return (
        <Sidebar>
            <SidebarContent>
                <div className="flex items-center gap-3 p-4">
                    <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-bold">
                        A
                    </div>
                    <span className="text-xl font-semibold text-gray-800">AppName</span>
                </div>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {navItems.map((item) => {
                                const isActive = location.pathname === item.url;
                                return item.items && item.items.length > 0 ? (
                                    <Collapsible
                                        key={item.title}
                                        asChild
                                        defaultOpen={isActive}
                                        className="group/collapsible"
                                    >
                                        <SidebarMenuItem>
                                            <CollapsibleTrigger asChild>
                                                <SidebarMenuButton tooltip={item.title} isActive={isActive}>
                                                    <item.icon className="w-5 h-5" />
                                                    <span>{item.title}</span>
                                                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                                </SidebarMenuButton>
                                            </CollapsibleTrigger>
                                            <CollapsibleContent>
                                                <SidebarMenuSub>
                                                    {item.items.map((subItem) => (
                                                        <SidebarMenuSubItem key={subItem.title}>
                                                            <SidebarMenuSubButton asChild isActive={location.pathname === subItem.url}>
                                                                <NavLink to={subItem.url}>
                                                                    <span>{subItem.title}</span>
                                                                </NavLink>
                                                            </SidebarMenuSubButton>
                                                        </SidebarMenuSubItem>
                                                    ))}
                                                </SidebarMenuSub>
                                            </CollapsibleContent>
                                        </SidebarMenuItem>
                                    </Collapsible>
                                ) : (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild tooltip={item.title} isActive={isActive}>
                                            <NavLink to={item.url} className="flex items-center gap-2">
                                                <item.icon className="w-5 h-5" />
                                                <span>{item.title}</span>
                                            </NavLink>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
