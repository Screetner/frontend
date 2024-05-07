"use client"
import React from "react";
import {Layout} from "@/app/components/SideBar";

interface dashboardProps {}

const Dashboard: React.FC<dashboardProps> = () => {
    return (
        <Layout activePath={"/dashboard"}>
            <div className={"flex items-center justify-center h-screen"}>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold">Welcome to Screetner</h1>
                    <p className="text-lg">This is a simple URL shortener.</p>
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;