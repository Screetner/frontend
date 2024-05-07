import {ReactNode} from "react";
import {
    LayoutDashboard,
    Home as HomeIcon,
} from "lucide-react";

export type path = "/" | "/dashboard"

interface RouteItem {
    icon: ReactNode;
    label: string
    path: path
}


export const routeList : RouteItem[] = [
    {
        icon: <HomeIcon size={20}/>,
        label: "Home",
        path: "/"
    },
    {
        icon: <LayoutDashboard size={20}/>,
        label: "Dashboard",
        path: "/dashboard"
    },
]