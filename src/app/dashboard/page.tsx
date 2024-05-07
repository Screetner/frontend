"use client"
import React from "react";

interface dashboardProps {}

const Dashboard: React.FC<dashboardProps> = () => {
    return (
        <div className={"flex items-center justify-center h-screen"}>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold">Welcome to Screetner</h1>
                <p className="text-lg">Here is Dashboard Page.</p>
            </div>
        </div>
    );
};

export default Dashboard;