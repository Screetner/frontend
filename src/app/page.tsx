"use client"
import React, {useEffect} from "react";

export default function Home() {

  return (
      <div className={"flex items-center justify-center h-screen"}>
          <div className="flex flex-col items-center justify-center">
              <h1 className="text-4xl font-bold">Welcome to Screetner</h1>
              <p className="text-lg">Here is Home Page.</p>
          </div>
      </div>
  );
}
