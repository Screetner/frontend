"use client"

import {useAuth} from "@/app/hooks/auth/useAuth";
import React from "react";
import {Layout} from "@/app/components/SideBar";

export default function Home() {
    const {data} = useAuth()
  return (
      <Layout activePath={"/"}>
          <div className={"flex items-center justify-center h-screen"}>
              <div className="flex flex-col items-center justify-center">
                  <h1 className="text-4xl font-bold">Welcome to Screetner</h1>
                  <p className="text-lg">This is a simple URL shortener.</p>
                  <p className="text-lg">You are {data?.user?.email}</p>
              </div>
          </div>
      </Layout>
  );
}
