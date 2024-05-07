import {ChevronFirst, ChevronLast, LogOut} from "lucide-react";
import {signOut} from "next-auth/react";
import Image from "next/image";
import logo from "../../../public/logo.jpg";
import React, {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {path, routeList} from "@/app/utils/routeList";
import {useRouter} from "next/navigation";

interface SidebarContextType {
    expanded: boolean;
}

const SidebarContext = createContext<SidebarContextType>({
    expanded: true,
});

interface SidebarProps {
    children: ReactNode;
}

function Sidebar({children}: SidebarProps) {
    const [expanded, setExpanded] = useState<boolean>(true);

    useEffect(() => {
        const handleResize = () => {
            const isLg = window.innerWidth <= 1023;
            setExpanded(!isLg);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    return (
        <>
            <aside className="h-screen">
                <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                    <div className="p-4 pb-2 flex justify-between items-center">
                        <Image
                            src={logo}
                            className={`overflow-hidden transition-all ${
                                expanded ? "w-12" : "w-0"
                            }`}
                            alt="Logo"
                        />
                        <button
                            onClick={() => setExpanded((curr) => !curr)}
                            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
                        >
                            {expanded ? <ChevronFirst/> : <ChevronLast/>}
                        </button>
                    </div>
                    <SidebarContext.Provider value={{expanded}}>
                        <ul className="flex-1 px-3">{children}</ul>
                    </SidebarContext.Provider>
                    <div className="border-t flex p-3">
                        <Image
                            src={logo}
                            className="w-10 h-10 rounded-md"
                            alt="Profile"
                            width={40}
                            height={40}
                        />
                        <div
                            className={`flex justify-between items-center overflow-hidden transition-all ${
                                expanded ? "w-52 ml-3" : "w-0"
                            } `}
                        >
                            <div className="leading-4">
                                <h4 className="font-semibold">AuJung</h4>
                                <span className="text-xs text-gray-600">Developer</span>
                            </div>
                            <div className="hover:cursor-pointer"
                                 onClick={() => signOut()}>
                                <LogOut size={20} color={"red"}/>
                            </div>
                        </div>
                    </div>

                </nav>
            </aside>
        </>
    );
}

interface SidebarItemProps {
    to: path
    icon: ReactNode;
    text: string;
    active?: boolean;
    alert?: boolean;
}

function SidebarItem({
                         to,
                         icon,
                         text,
                         active = false,
                     }: SidebarItemProps) {
    const {expanded} = useContext(SidebarContext);
    const router = useRouter();

    const handleOnClick = () => {
        router.push(to)
    }

    return (
        <li
            className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}`}
            onClick={handleOnClick}
        >
                {icon}
            <span
                className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}
            >
                {text}
            </span>
            {!expanded && (
                <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
                    {text}
                </div>
            )}
        </li>);
}

export function Layout({children, activePath}: { children: ReactNode, activePath: path}) {
    return (
        <div className="flex">
            <Sidebar>
                {
                    routeList.map(r => {
                        return <SidebarItem key={r.label} icon={r.icon} text={r.label} active={r.path === activePath} to={r.path}/>
                    })
                }
            </Sidebar>
            <div className={"w-full"}>
                {children}
            </div>
        </div>
    )
}
