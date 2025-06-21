import { Info, LayoutDashboard, LibraryBig, Projector, Settings } from "lucide-react";
import { SideBarLinkParam } from "./type";

export const sideBarLinks:SideBarLinkParam[] = [
    {
        label:"Dashboard",
        children:<LayoutDashboard />,
        link:'/dashboard'
    },
    {
        label:"My Presentations",
        children:<Projector />,
        link:'/my-presentations'
    },
    {
        label:"Templates",
        children:<LibraryBig />,
        link:'/templates'
    },
    {
        label:"Help",
        children:<Info />,
        link:'/help'
    },
    {
        label:"Settings",
        children:<Settings />,
        link:'/settings'
    },
]